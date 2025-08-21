export const readSecretEnv = () => {
  const { env } = process
  return {
    env: env.ENV,
    keyAlchemy: env.KEY_ALCHEMY,
    urlAlchemy: env.URL_ALCHEMY,
    awsS3AccessId: env.AWS_S3_ACCESS_ID,
    awsS3AccessKey: env.AWS_S3_ACCESS_KEY,
    awsS3Bucket: env.AWS_S3_BUCKET,
  }
}
