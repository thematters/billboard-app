import clsx from 'clsx'

type PropsType = {
  classes?: string
  items: Array<{ key: string; name: string }>
  selected: string
  onClick: (key: string) => void
}

const SideNav = ({ classes, items, selected, onClick }: PropsType) => {
  const baseCss = clsx('f-col gap-y-2', classes)
  const navCss = clsx('px-5 py-3 side-nav-button')

  return (
    <section className={baseCss}>
      {items.map(({ key, name }) => (
        <div
          key={key}
          className={clsx(navCss, { active: selected === key })}
          onClick={() => onClick(key)}
        >
          {name}
        </div>
      ))}
    </section>
  )
}

export default SideNav
