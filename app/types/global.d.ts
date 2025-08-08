export {}

declare global {
  interface Window {
    gtag?: (...args: Anything[]) => void
  }
}
