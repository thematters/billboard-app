import { useContext } from 'react'

import { AnalyticsContextSource } from '@component/Context/Analytics'

const useAnalytics = () => {
  const context = useContext(AnalyticsContextSource)
  return context
}

export default useAnalytics
