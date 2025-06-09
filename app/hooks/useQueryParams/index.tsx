import { useParams, useSearchParams } from '@remix-run/react'

const useQueryParams = () => {
  const { id: boardId } = useParams()
  const [searchParams] = useSearchParams()
  const id = Number(boardId || 0)
  const epoch = Number(searchParams.get('epoch') || 0)
  const from = searchParams.get('from') || ''
  const tab = searchParams.get('tab') || ''

  return { id, epoch, from, tab }
}

export default useQueryParams
