import type { ActionFunctionArgs } from '@remix-run/node'

import { json, unstable_parseMultipartFormData } from '@remix-run/node'
import { v4 as uuidv4 } from 'uuid'

import { ERROR, STATE } from '@constant'
import { s3Uploader } from '@util/aws.server'
import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'
import { handleError, sendError } from '@util/server'

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await unstable_parseMultipartFormData(request, s3Uploader)
    const filename = formData.get('file')

    return json({ state: STATE.successful, filename })
  } catch (error) {
    const errorMessage = handleError(error)
    console.log(errorMessage)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
