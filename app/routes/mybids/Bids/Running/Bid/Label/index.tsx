import clsx from 'clsx'

type Props = {
  state: string
}

const Label = ({ state }: Props) => {
  const isRunning = state === 'running'
  const isUpcoming = state === 'upcoming'

  const baseCss =
    'py-1 px-2 w-fit md:w-full rounded-lg t-14 md:t-16 text-black font-semibold'
  const runningCss = clsx(baseCss, 'bg-[#91d7ff]')
  const upcomingCss = clsx(baseCss, 'bg-[#fffc62]')

  return (
    <>
      {isRunning && <p className={runningCss}>Running</p>}
      {isUpcoming && <p className={upcomingCss}>Upcoming</p>}
    </>
  )
}

export default Label
