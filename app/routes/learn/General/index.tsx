import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import Collapse from '@components/Collapse'
import { PAPER_LINK } from '@constants'

const General = () => {
  const titleCss = clsx('mt-6 md:mt-0 mb-2 text-[28px] md:text-4xl text-white')
  const linkCss = clsx('text-white')
  const noBorderCss = clsx('border-none')

  return (
    <>
      <h1 className={titleCss}>General</h1>
      <Collapse title="What is Billboard?">
        <p>
          Billboard is a decentralized protocl turns website advertisement
          spaces into NFTs and sells them through perpetual Harberger
          auctions—anyone may bid, and the winner can place advertisements and
          pays a running tax proportional to the winning price.
        </p>
        <p>
          The green paper of Billboard can be found{' '}
          <NavLink className={linkCss} to={PAPER_LINK} target="_blank">
            here
          </NavLink>
          .
        </p>
      </Collapse>
      <Collapse title="What and why Harberger Tax ?">
        <p>
          Harberger Tax, also known as partial common ownership, keeps an asset
          in a continuous auction. It makes asset prices transparent and aligned
          with real market value. It prevents long-term hoarding by allowing
          ownership to change at regular, short intervals, which maintains
          liquidity. The taxes collected create a steady revenue stream for the
          community hosting the asset.
        </p>
        <p>
          Billboard applies this model to each NFT, restarting the auction every
          14 days instead of relying on opaque advertising networks. Advertisers
          bid openly during each period, and the resulting tax feeds a
          quadratic-funding pool that multiplies reader donations and rewards
          creators.
        </p>
      </Collapse>
      <Collapse classes={noBorderCss} title="What is Quadratic Funding ?">
        <p>
          Quadratic Funding is a matching system that adds extra money to
          projects based on how many people donate, not how much a few donors
          give. Lots of small contributions trigger bigger matches than a
          handful of large ones, so community popularity guides where the funds
          go. Platforms like Gitcoin use it to support open-source and other
          public goods.
        </p>
      </Collapse>
    </>
  )
}

export default General
