import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import uuid from 'short-uuid'

import { ERROR } from '@constants'

import { readSecretEnv } from './env.server'

// FIXME: setup the right type for _awsContext
declare global {
  // eslint-disable-next-line no-var
  var _awsS3Context: Anything
}

export const getAWSS3Context = () => {
  if (globalThis._awsS3Context) {
    return globalThis._awsS3Context
  }

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

  globalThis._awsS3Context = { s3 }
  return globalThis._awsS3Context
}

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

  const { s3 } = getAWSS3Context()

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
