import { useParams, useSearchParams } from '@remix-run/react'

const useQueryParams = () => {
  const { id: boardId } = useParams()
  const [searchParams] = useSearchParams()
  const id = Number(boardId || 0)
  const epoch = Number(searchParams.get('epoch') || 0)
  const from = searchParams.get('from') || ''

  return { id, epoch, from }
}

export default useQueryParams
