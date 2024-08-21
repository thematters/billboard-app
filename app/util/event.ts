export const subscribe = (name: string, handler: () => void) => {
  if (document) {
    document.addEventListener(name, handler)
  }
}

export const unsubscribe = (name: string, handler: () => void) => {
  if (document) {
    document.removeEventListener(name, handler)
  }
}

export const publish = (name: string, data: Record<string, any>) => {
  const event = new CustomEvent(name, { detail: data })
  if (document) {
    document.dispatchEvent(event)
  }
}
