import type { Analytics } from '@type'
import type React from 'react'

import { createContext } from 'react'

type Props = {
  children: React.ReactNode
  gaId: string
}

export const AnalyticsContextSource = createContext({} as Analytics)

const AnalyticsContext = ({ children, gaId }: Props) => {
  const init = () => {
    if (!window || !window.gtag || !gaId) {
      return
    }
    window.gtag('js', new Date())
    window.gtag('config', gaId)
  }

  const trackPageView = () => {
    if (!window?.gtag) {
      return
    }

    const page = window?.location?.href || ''
    window.gtag('event', 'page_view', { page_location: page })
  }

  return (
    <AnalyticsContextSource.Provider value={{ init, trackPageView }}>
      {children}
    </AnalyticsContextSource.Provider>
  )
}

export default AnalyticsContext
