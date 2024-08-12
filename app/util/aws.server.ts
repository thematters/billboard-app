import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import uuid from 'short-uuid'

import { readSecretEnvs } from './envs.server'

export const initS3 = () => {
  const { awsAccessId, awsAccessKey } = readSecretEnvs()
  return new S3Client({
    region: 'ap-southeast-1',
    credentials: {
      accessKeyId: awsAccessId || '',
      secretAccessKey: awsAccessKey || '',
    },
  })
}

export const toBuffer = async (data: any) => {
  const result = []
  for await (const chunk of data) {
    result.push(chunk)
  }
  return Buffer.concat(result)
}

export const s3Uploader = async ({
  data,
  filename,
  contentType,
}: Record<string, any>) => {
  if (!filename) {
    return
  }

  // init
  const { awsS3Bucket } = readSecretEnvs()
  const s3 = initS3()

  // get ext
  const ext = filename.split('.').pop()
  const key = `${uuid.generate()}.${ext}`

  const body = await toBuffer(data)
  const params = new PutObjectCommand({
    Bucket: awsS3Bucket,
    Key: key,
    Body: body,
    ContentType: contentType,
  })
  await s3.send(params)
  return `https://${awsS3Bucket}.s3.ap-southeast-1.amazonaws.com/${key}`
}
