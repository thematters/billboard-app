import clsx from 'clsx'

import Box from '@components/Box'

const Page = () => {
  const baseCss = clsx(
    'min-w-agreement max-w-agreement mx-auto py-10 md:py-20 text-gray-30'
  )
  const titleCss = clsx('section-title pb-4')
  const textCss = clsx('pt-4 text-sm md:text-base font-normal')
  const boldCss = clsx(textCss, 'font-semibold')
  const hrCss = clsx('my-10 border-t border-gray-80')
  const subTitleCss = clsx('text-base md:text-[20px]')
  const listCss = clsx(
    'pt-4 pl-4 list-decimal list-outside',
    '[&>li]:pt-2 text-sm md:text-base'
  )
  const subListCss = clsx('pl-5 list-disc', '[&>li]:pt-1')

  return (
    <Box classes={baseCss}>
      <h1 className={titleCss}>User Agreement</h1>
      <p className={textCss}>
        Welcome to Billboard, a decentralized advertising platform. Before
        participating in any ad bidding or uploading advertisement content,
        please read and agree to the following terms.
      </p>
      <p className={boldCss}>
        By clicking “Confirm,” “Submit,” or any similar action, you acknowledge
        that you have read, understood, and agreed to all terms of this
        Agreement.
      </p>
      <hr className={hrCss} />

      <h3 className={subTitleCss}>1. Compliance of Advertisement Content</h3>
      <ol className={listCss}>
        <li>
          The Advertiser shall ensure that all uploaded ad content (including
          but not limited to text, images, videos, links, code, etc.) is
          truthful, legal, and complies with Billboard’s policies and the
          applicable laws in relevant jurisdictions.
        </li>
        <li>
          The following types of content are strictly prohibited:
          <ol className={subListCss}>
            <li>Pornographic, sexually explicit, or suggestive content</li>
            <li>
              Gambling, betting, lotteries, virtual casinos, or any related
              services
            </li>
            <li>Fraudulent, misleading, or deceptive claims</li>
            <li>Content involving violence, discrimination, or hate speech</li>
            <li>Prohibited items, illegal drugs, or weapons</li>
            <li>
              Unauthorized use of intellectual property (e.g., copyrighted
              images, music, trademarks)
            </li>
          </ol>
        </li>
        <li>
          The Advertiser is solely responsible for any legal liability arising
          from the ad content. Billboard shall bear no joint or secondary
          liability.
        </li>
      </ol>
      <hr className={hrCss} />

      <h3 className={subTitleCss}>2. Violation Handling and Takedown Rights</h3>
      <p className={textCss}>
        If Billboard identifies or reasonably suspects that an advertisement
        violates this Agreement or relevant laws, it may remove the content
        without prior notice, suspend or terminate the Advertiser’s account, and
        seek legal remedies. No refund or compensation will be issued.
      </p>
      <hr className={hrCss} />

      <h3 className={subTitleCss}>3. Bidding and Transaction Fees</h3>
      <ol className={listCss}>
        <li>
          Ad slots are awarded through a bidding process, with the highest
          bidder winning the right to place the ad.
        </li>
        <li>
          The bidding process may involve on-chain transactions and related fees
          (e.g., gas fees), which may fluctuate due to network conditions and
          shall be fully borne by the Advertiser.
        </li>
        <li>
          Billboard is not responsible for any losses caused by blockchain
          transaction delays, failures, or fee fluctuations.
        </li>
      </ol>
      <hr className={hrCss} />

      <h3 className={subTitleCss}>4. No Cancellation and No Refund</h3>
      <ol className={listCss}>
        <li>
          Once an ad bid is successfully placed and won, it is final and
          non-refundable.
        </li>
        <li>
          If the Advertiser fails to submit compliant materials on time, it will
          be deemed a forfeiture. The ad will not be displayed, and no fees will
          be refunded.
        </li>
      </ol>
      <hr className={hrCss} />

      <h3 className={subTitleCss}>5. Intellectual Property</h3>
      <p className={textCss}>
        The Advertiser shall ensure the ad content does not infringe upon
        third-party intellectual property. Any such violation shall be solely
        the Advertiser’s responsibility, including all legal and financial
        consequences.
      </p>
      <hr className={hrCss} />

      <h3 className={subTitleCss}>6. Data and Analytics Usage</h3>
      <p className={textCss}>
        The Advertiser agrees that Billboard may use advertisement-related data
        (e.g., impressions, clicks, engagement) in accordance with its Privacy
        Policy for performance analytics and platform optimization.
      </p>
      <hr className={hrCss} />

      <h3 className={subTitleCss}>7. Agreement Updates and Termination</h3>
      <ol className={listCss}>
        <li>
          Billboard reserves the right to update this Agreement at any time.
          Updates will take effect once published on the website. The Advertiser
          is responsible for staying informed.
        </li>
        <li>
          Billboard may suspend or terminate services for advertisers who
          violate this Agreement without prior notice and may pursue legal
          action if necessary.
        </li>
      </ol>
      <hr className={hrCss} />

      <h3 className={subTitleCss}>8. Governing Law and Dispute Resolution</h3>
      <p className={textCss}>
        This Agreement is governed by general principles of international
        commercial practices and applicable legal norms, without reference to
        any specific jurisdiction.
      </p>

      <p className={textCss}>
        In case of a dispute, both parties shall first attempt to resolve it
        through negotiation. If unsuccessful, the matter shall be submitted to a
        neutral arbitration body designated by Billboard, and its decision shall
        be final and binding.
      </p>
    </Box>
  )
}

export default Page
