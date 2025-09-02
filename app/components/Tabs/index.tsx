import clsx from 'clsx'

type PropsType = {
  classes?: string
  items: Array<{ key: string; name: string }>
  selected: string
  onClick: (key: string) => void
}

const Tabs = ({ classes, items, selected, onClick }: PropsType) => {
  const baseCss = clsx('f-row-cs gap-x-6 border-b border-gray-80', classes)
  const tabCss = clsx('py-3 px-1 tab-button')

  return (
    <section className={baseCss}>
      {items.map(({ key, name }) => (
        <div
          key={key}
          className={clsx(tabCss, { active: selected === key })}
          onClick={() => onClick(key)}
        >
          {name}
        </div>
      ))}
    </section>
  )
}

export default Tabs
