export const readEnv = () => {
  const { env } = process
  const isProd = env.ENV === 'production'
  return {
    env: env.ENV,
    gaId: env.GA_ID,
  }
}
