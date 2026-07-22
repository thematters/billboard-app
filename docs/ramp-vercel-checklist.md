# Ramp and Vercel Checklist

This checklist covers the hosted Ramp Apple Pay on-ramp used by the bid flow.
The integration is non-custodial: Ramp sends Optimism USDT to the user's
connected wallet, then the user returns to Billboard and completes the existing
`Approve USDT` and `Confirm` transactions.

## Ramp setup

1. Apply for a Ramp host API key from the Ramp partner flow:
   <https://docs.ramp.network/api-keys>
2. Request production support for:
   - production domain: `https://billboard-app.vercel.app`
   - integration type: hosted widget
   - asset: `OPTIMISM_USDT`
   - payment method: Apple Pay
3. Confirm Ramp's Optimism USDT asset matches the app's production USDT
   contract:
   `0x94b008aA00579c1307B0EF2c499aD98a8ce58e58`
4. Keep demo/staging and production keys separate. Do not use a demo key on the
   production deployment.

`RAMP_HOST_API_KEY` is passed to Ramp's hosted URL from the browser. Treat it as
a public integration identifier, not as a server-only secret.

## Vercel setup

Add the following environment variable to the Vercel project:

```text
RAMP_HOST_API_KEY=<production Ramp host API key>
```

Use the Vercel dashboard:

1. Open the Billboard Vercel project.
2. Go to Settings -> Environment Variables.
3. Add `RAMP_HOST_API_KEY` for Production.
4. Redeploy the latest production deployment after saving the variable.

If a preview environment is needed, add the Ramp demo/staging key to Preview
only and verify against a preview deployment.

## Verification

After redeploying production, verify the integration in this order.

1. Confirm the deployed bundle includes the Ramp entrypoint:

   ```sh
   tmp=$(mktemp -d)
   curl -fsSL https://billboard-app.vercel.app/bid/1 > "$tmp/bid.html"
   for p in $(rg -o '/assets/[^" ]+\.js' "$tmp/bid.html" | sort -u); do
     curl -fsSL "https://billboard-app.vercel.app$p" > "$tmp/$(basename "$p")"
   done
   rg "OPTIMISM_USDT|APPLE_PAY|Add about" "$tmp"
   rm -rf "$tmp"
   ```

2. Confirm the target board allows open bidding, if that is expected for the
   launch:

   ```sh
   # Read from the Operator contract on Optimism:
   # isBoardWhitelistDisabled(1) should return true.
   ```

   Contract page:
   <https://optimistic.etherscan.io/address/0x92a117aeA74963Cd0CEdF9C50f99435451a291F7#readContract>

3. Open `https://billboard-app.vercel.app/bid/1` with a connected wallet that
   has less Optimism USDT than the bid requires.
4. Enter a valid bid amount. The price step should show an Apple Pay top-up
   button:

   ```text
   Add <amount> USDT with Apple Pay
   ```

5. Click the button. Ramp should open in a new tab with:
   - flow: on-ramp
   - output asset: Optimism USDT
   - payment method preference: Apple Pay
   - destination address: the connected wallet address
6. Return to Billboard after Ramp completes. The original bid flow should still
   require the user to sign:
   - `Approve USDT`, if allowance is insufficient
   - `Confirm`, to place or update the bid

## Cross-system acceptance

Open bidding and Ramp only change how advertisers enter the bid flow. Before
launch sign-off, also verify the surfaces that consume Billboard outputs.

1. Matters Web ad placement:
   - Open a production Matters page that renders the Billboard placement.
   - Confirm it still links to `https://billboard.matters-lab.io`.
   - Confirm the winning ad image renders after the auction epoch changes.
   - Confirm the production `NEXT_PUBLIC_BILLBOARD_IMAGE_URL` allows the S3
     image host returned by Billboard uploads, currently:
     `https://<AWS_S3_BUCKET>.s3.ap-southeast-1.amazonaws.com/<key>`.
   - Confirm ad clicks still record and redirect through the existing Matters
     Web Billboard component.
2. QF matching:
   - Do not rely on the Lambda handler's historical default pool amount for a
     production round.
   - Pass the reviewed `amountTotal` for the round explicitly when running the
     QF calculator.
   - Validate `rounds.json` and the distribution files before finalizing and
     sending notifications.
3. Observable matching dashboard:
   - Verify the notebook still loads the current `rounds.json` and distribution
     files after the next QF round.
   - Treat notebook edits as blocked until the team has the notebook URL and
     editor access.

## Troubleshooting

- If the Apple Pay button does not appear, check that `RAMP_HOST_API_KEY` is set
  in the active Vercel environment and that the deployment was redeployed after
  the variable was added.
- If the button appears with an unexpected amount, confirm the connected
  wallet's Optimism USDT balance and the current bid total. The app pre-fills the
  shortfall, with a 10 USDT minimum.
- If Ramp opens but does not allow the purchase, confirm the host API key is a
  production key approved for `billboard-app.vercel.app`, `OPTIMISM_USDT`, and
  the user's country/payment method.
- If the user can buy USDT but cannot bid, verify the board whitelist state and
  the user's wallet network. Production bidding runs on Optimism.
