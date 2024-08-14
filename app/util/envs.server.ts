export const readSecretEnvs = () => {
  const envs = process.env
  return {
    keyAlchemy: envs.KEY_ALCHEMY,
    urlAlchemy: envs.URL_ALCHEMY,
    awsS3AccessId: envs.AWS_S3_ACCESS_ID,
    awsS3AccessKey: envs.AWS_S3_ACCESS_KEY,
    awsS3Bucket: envs.AWS_S3_BUCKET,
  }
}
