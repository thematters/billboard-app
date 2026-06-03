import clsx from 'clsx'

import Collapse from '@components/Collapse'

const Bid = () => {
  const titleCss = clsx('mt-6 md:mt-0 mb-2 text-[28px] md:text-4xl text-white')
  const noBorderCss = clsx('border-none')

  return (
    <>
      <h1 className={titleCss}>Bid</h1>
      <Collapse title="How does Billboard auction work ?">
        <p>
          Each Billboard NFT cycles through a 14-day auction, during which
          anyone can place a bid and pre-set advertisement content.
        </p>
        <p>
          When the auction closes, the highest bidder becomes the owner and has
          a 14-day setup window to refine or replace the ad before it goes live
          for the following 14 days—updates remain possible throughout both
          phases.
        </p>
      </Collapse>
      <Collapse title="Who can participant Billboard auctions ?">
        <p>
          Billboard auctions are open to any connected wallet when the board is
          configured for open bidding. Advertisement content must comply with
          the User Agreement and platform policies.
        </p>
      </Collapse>
      <Collapse title="How is the total bid amount calculated？">
        <p>The total amount consists of the bid price plus the tax fee.</p>
        <p>
          To keep the bid price close to market value, we adopt a tax system at
          a daily rate of 3.6%. If you win the bid and your advertisement will
          run for 14 days by default. Assuming you bid 100 USDT, the tax fee is
          calculated as:
        </p>
        <p>100.00 x 3.6% x 14 = 50.4</p>
      </Collapse>
      <Collapse classes={noBorderCss} title="What are the upload limits?">
        <p>Four formats are supported: JPG, JPEG, PNG and WEBP.</p>
        <p>Optimal dimensions are 528 × 296 pixels.</p>
        <p>File size must not exceed 1 MB.</p>
      </Collapse>
    </>
  )
}

export default Bid
