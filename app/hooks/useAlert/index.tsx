import { toast } from 'react-hot-toast'
import GeneralAlert from '@components/Alert/General'

const useAlert = () => {
  const makeAlert = (content: string) => {
    toast.custom((t) => (
      <GeneralAlert content={content} visible={t.visible} style={t.style} />
    ))
  }

  return { makeAlert }
}

export default useAlert
