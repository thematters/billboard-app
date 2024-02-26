import clsx from 'clsx'

const Slogan = () => {
  const css = clsx('pt-8', 'slogan')
  return (
    <section>
      <h1 className={css}>
        ON-CHAIN BILLBOARD
        <br />
        TO DEMOCRATIZE THE ATTENTION ECONOMY
      </h1>
    </section>
  )
}

export default Slogan
