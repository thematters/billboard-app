import type { ActionFunctionArgs } from '@remix-run/node'

import { json, unstable_parseMultipartFormData } from '@remix-run/node'
import { DATA_STATE } from '@constants'
import { s3Uploader } from '@server/awsS3.server'
import { sendError } from '@server/helper.server'

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await unstable_parseMultipartFormData(request, s3Uploader)
    const filename = formData.get('file')
    return json({ state: DATA_STATE.successful, filename })
  } catch (error) {
    return sendError(error)
  }
}
