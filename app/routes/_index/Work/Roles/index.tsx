import clsx from 'clsx'

import RolesSvg from '@components/Svg/Roles'

const Roles = () => {
  const baseCss = clsx('mt-10 grid grid-cols-[repeat(13,1fr)] gap-x-20')

  return (
    <div className={baseCss}>
      <div>
        <RolesSvg />
      </div>
      <div></div>
    </div>
  )
}

export default Roles
