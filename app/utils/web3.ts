export const shortenAddress = (value: string) => {
  const start = value.substr(0, 4)
  const end = value.slice(-4)
  return `${start}...${end}`
}
