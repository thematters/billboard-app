import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import uuid from 'short-uuid'

import { ERROR } from '@constants'

import { readSecretEnv } from './env.server'

const getAWSS3Context = () => {
  const { awsS3AccessId, awsS3AccessKey } = readSecretEnv()

  if (!awsS3AccessId || !awsS3AccessKey) {
    throw new Error(ERROR.AWS_NOT_SET, { cause: ERROR.AWS_NOT_SET })
  }

  const s3 = new S3Client({
    region: 'ap-southeast-1',
    credentials: {
      accessKeyId: awsS3AccessId || '',
      secretAccessKey: awsS3AccessKey || '',
    },
  })

  return s3
}

export const s3 = getAWSS3Context()

export const toBuffer = async (data: Anything) => {
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
}: Record<string, Anything>) => {
  if (!filename) {
    return
  }

  // init
  const { awsS3Bucket } = readSecretEnv()
  if (!awsS3Bucket) {
    throw new Error(ERROR.AWS_NOT_SET, { cause: ERROR.AWS_NOT_SET })
  }

  // size limit 1mb
  const maxSize = 1024 * 1024

  // get ext
  const ext = filename.split('.').pop()
  const key = `${uuid.generate()}.${ext}`

  const body = await toBuffer(data)

  if (Buffer.byteLength(body) > maxSize) {
    throw new Error(ERROR.REACH_SIZE_LIMIT, { cause: ERROR.REACH_SIZE_LIMIT })
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
