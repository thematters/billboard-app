import clsx from 'clsx'

import Collapse from '@components/Collapse'

const Reward = () => {
  const titleCss = clsx('mt-6 md:mt-0 mb-2 text-[28px] md:text-4xl text-white')
  const noBorderCss = clsx('border-none')

  return (
    <>
      <h1 className={titleCss}>Reward</h1>
      <Collapse title="How are creator rewards generated ?">
        <p>
          Creator rewards come from the Harberger tax that Billboard NFT bidders
          pay on their winning bids. All tax collected flows into a
          quadratic-funding matching pool.
        </p>
      </Collapse>
      <Collapse
        classes={noBorderCss}
        title="Who is eligible to get creator rewards ?"
      >
        <p>
          Any content creator on a Billboard-enabled platform qualifies for
          rewards once their work receives even a single reader donation.
        </p>
      </Collapse>
    </>
  )
}

export default Reward
