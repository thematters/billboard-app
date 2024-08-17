import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import uuid from 'short-uuid'

import { ERROR } from '@constant'

import { readSecretEnvs } from './envs.server'

export const initS3 = () => {
  const { awsS3AccessId, awsS3AccessKey } = readSecretEnvs()
  return new S3Client({
    region: 'ap-southeast-1',
    credentials: {
      accessKeyId: awsS3AccessId || '',
      secretAccessKey: awsS3AccessKey || '',
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

  // size limit 1mb
  const maxSize = 1024 * 1024

  // get ext
  const ext = filename.split('.').pop()
  const key = `${uuid.generate()}.${ext}`

  const body = await toBuffer(data)

  if (Buffer.byteLength(body) > maxSize) {
    throw new Error(ERROR.REACH_SIZE_LIMIT)
  }

  const params = new PutObjectCommand({
    Bucket: awsS3Bucket,
    Key: key,
    Body: body,
    ContentType: contentType,
  })
  await s3.send(params)
  return `https://${awsS3Bucket}.s3.ap-southeast-1.amazonaws.com/${key}`
}
