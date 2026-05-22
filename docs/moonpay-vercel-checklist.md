# MoonPay and Vercel Checklist

This checklist covers the hosted MoonPay Apple Pay on-ramp used by the bid
flow. The integration is non-custodial: MoonPay sends Optimism USDT to the
user's connected wallet, then the user returns to Billboard and completes the
existing `Approve USDT` and `Confirm` transactions.

## MoonPay setup

1. Apply for MoonPay partner access and production API keys.
2. Request production support for:
   - production domains:
     - `https://billboard.matters-lab.io`
     - `https://billboard-app.vercel.app`
   - widget flow: buy/on-ramp
   - asset: `usdt_optimism`
   - payment method: Apple Pay
   - fiat currencies: `twd` and `usd`
3. Confirm MoonPay's Optimism USDT asset matches the app's production USDT
   contract:
   `0x94b008aA00579c1307B0EF2c499aD98a8ce58e58`
4. Confirm the launch geography. MoonPay's public currencies API currently
   marks `usdt_optimism` as unavailable in the US and Canada.
5. Keep sandbox and production keys separate. Do not use test keys on the
   production deployment.

`MOONPAY_API_KEY` is included in the hosted MoonPay URL and can be treated as a
public integration identifier. `MOONPAY_SECRET_KEY` signs the wallet-address URL
server-side and must stay server-only.

## Vercel setup

Add the following environment variables to the Vercel project:

```text
MOONPAY_API_KEY=<production MoonPay publishable API key>
MOONPAY_SECRET_KEY=<production MoonPay secret key>
MOONPAY_BASE_CURRENCY_CODE=twd
```

Optional:

```text
MOONPAY_WIDGET_URL=https://buy.moonpay.com/
```

If `MOONPAY_WIDGET_URL` is unset, production uses `https://buy.moonpay.com/`
and non-production uses `https://buy-sandbox.moonpay.com/`.

Use the Vercel dashboard:

1. Open the Billboard Vercel project.
2. Go to Settings -> Environment Variables.
3. Add the MoonPay variables for Production.
4. Add sandbox MoonPay variables for Preview if preview testing is needed.
5. Redeploy the active production deployment after saving the variables.

## Verification

After redeploying production, verify the integration in this order.

1. Confirm the deployed bundle includes the MoonPay entrypoint:

   ```sh
   tmp=$(mktemp -d)
   curl -fsSL https://billboard.matters-lab.io/bid/1 > "$tmp/bid.html"
   for p in $(rg -o '/assets/[^" ]+\.js' "$tmp/bid.html" | sort -u); do
     curl -fsSL "https://billboard.matters-lab.io$p" > "$tmp/$(basename "$p")"
   done
   rg "api/moonpay|usdt_optimism|MoonPay|Add about" "$tmp"
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

3. Open `https://billboard.matters-lab.io/bid/1` with a connected wallet that
   has less Optimism USDT than the bid requires.
4. Enter a valid bid amount. The price step should show an Apple Pay top-up
   button:

   ```text
   Add <amount> USDT with Apple Pay
   ```

5. Click the button. MoonPay should open in a new tab with:
   - output asset: `usdt_optimism`
   - payment method preference: Apple Pay
   - destination address: the connected wallet address
   - signed URL containing a `signature` parameter
6. Return to Billboard after MoonPay completes. The original bid flow should
   still require the user to sign:
   - `Approve USDT`, if allowance is insufficient
   - `Confirm`, to place or update the bid

## Matters release evaluation

Follow the release evaluation SOP in
`/Users/mashbean/Documents/AI-Agent/docs/projects/matters-release-evaluation-agent/agent-sop.md`.

Report these gates separately:

- Repo/build status.
- Automated E2E status.
- Staging or preview acceptance.
- Production approval state.
- Production smoke-test state.

For production, do read-only checks before human approval. Any production bid,
payment, moderation action, or contract write requires explicit human approval.

## Cross-system acceptance

MoonPay only changes how advertisers enter the bid flow. Before launch sign-off,
also verify the surfaces that consume Billboard outputs.

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

- If the Apple Pay button does not appear, check that `MOONPAY_API_KEY` is set
  in the active Vercel environment and that the deployment was redeployed after
  the variable was added.
- If the button appears but cannot open MoonPay, check `MOONPAY_SECRET_KEY` and
  the `/api/moonpay` response.
- If MoonPay opens but does not allow the purchase, confirm the API key is
  approved for `usdt_optimism`, Apple Pay, the user's country, and the active
  domain.
- If the user can buy USDT but cannot bid, verify the board whitelist state and
  the user's wallet network. Production bidding runs on Optimism.
