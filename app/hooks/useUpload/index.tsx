import { useMutation } from '@tanstack/react-query'

import { DATA_STATE } from '@constants'

const useUpload = (callback: (value: string) => void) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: (formData: Anything) => {
      return fetch('/api/upload', {
        method: 'POST',
        body: formData,
      }).then((response) => response.json())
    },
    onSuccess: (data) => {
      if (data?.state === DATA_STATE.error) {
        callback('')
      } else if (
        data?.state === DATA_STATE.successful &&
        data?.filename &&
        callback
      ) {
        callback(data?.filename)
      }
    },
  })

  const upload = async (event: Anything) => {
    const files = event.currentTarget.files
    if (isPending || !files) {
      return
    }
    const formData = new FormData()
    for (const file of files) {
      formData.append('file', file)
    }
    mutate(formData)
  }

  return { data, error, isLoading: isPending, upload }
}

export default useUpload
