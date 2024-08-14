import type { ComponentProps } from '@type'

import SvgMail from '@svg/Mail'
import SvgPaper from '@svg/Paper'

type Props = ComponentProps & {
  type: 'mail' | 'paper'
}

const FooterIcon = ({ children, css, type }: Props) => {
  const baseCss = 'p-1 md:p-2.5 w-fit bg-grass text-black rounded-lg'
  return (
    <section className={baseCss}>
      {type === 'mail' && <SvgMail />}
      {type === 'paper' && <SvgPaper />}
    </section>
  )
}

export default FooterIcon
