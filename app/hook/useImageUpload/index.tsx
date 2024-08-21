import { useMutation } from '@tanstack/react-query'

const useImageUpload = ({
  callback,
}: {
  callback: (value: string) => void
}) => {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: (formData: any) => {
      return fetch('/api/upload', {
        method: 'POST',
        body: formData,
      }).then((response) => response.json())
    },
    onSuccess: (data) => {
      if (!data?.filename) {
        return
      }
      if (callback) {
        callback(data?.filename)
      }
    },
  })

  const upload = async (event: any) => {
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

export default useImageUpload
