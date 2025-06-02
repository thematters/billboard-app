import { useParams, useSearchParams } from '@remix-run/react'

const useQueryParams = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const epoch = searchParams.get('epoch') || ''
  const from = searchParams.get('from') || ''

  return { id, epoch, from }
}

export default useQueryParams
