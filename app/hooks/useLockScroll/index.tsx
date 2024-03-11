import { useEffect, useState } from 'react'

const useLockScroll = (value: boolean) => {
  useEffect(() => {
    if (value) {
      document.documentElement.classList.add('overflow-y-hidden')
    }

    return () => {
      document.documentElement.classList.remove('overflow-y-hidden')
    }
  }, [value])
}

export default useLockScroll
