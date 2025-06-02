import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { toPercentTaxRate } from '@utils/num'

type PropsType = {
  price: number
  taxRate: number
  tax: number
  totalAmount: number
}

const Detail = ({ price, taxRate, tax, totalAmount }: PropsType) => {
  const [show, setShow] = useState<boolean>(false)

  const click = () => setShow(!show)

  const hintCss = clsx('mt-4 text-xs text-right text-green-20 cursor-pointer')
  const detailCss = clsx(
    'mt-2 p-4 text-xs bg-gray-80 rounded-lg f-col gap-y-1',
    '[&>h5]:text-white [&>h5]:font-semibold'
  )
  const subtitleCss = clsx('mt-5')
  const numCss = clsx('text-green-20')

  return (
    <>
      <p className={hintCss} onClick={click}>
        Show Details
      </p>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: 'easeInOut' },
                opacity: { delay: 0.15, duration: 0.18, ease: 'easeInOut' },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { delay: 0.09, duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.18, ease: 'easeInOut' },
              },
            }}
          >
            <section className={detailCss}>
              <h5>Total Amount</h5>
              <p>
                The total amount consists of the bid price pluses the tax fee.
              </p>
              <p className={numCss}>
                {price.toFixed(2)} + {tax} = {totalAmount}
              </p>

              <h5 className={subtitleCss}>Tax Fee</h5>
              <p>
                To keep the AD Space bid price close to market value, we adopt a
                tax system at a daily rate of 3.6%. If you win the bid and your
                ad will run for 14 days by default, the tax is calculated as :
              </p>
              <p className={numCss}>
                {price.toFixed(2)} × {toPercentTaxRate(taxRate)}% × 14 = {tax}
              </p>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Detail
