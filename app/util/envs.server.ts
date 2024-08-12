export const readSecretEnvs = () => {
  const envs = process.env
  return {
    keyAlchemy: envs.KEY_ALCHEMY,
    urlAlchemy: envs.URL_ALCHEMY,
    awsAccessId: envs.AWS_ACCESS_ID,
    awsAccessKey: envs.AWS_ACCESS_KEY,
    awsS3Bucket: envs.AWS_S3_BUCKET,
  }
}
