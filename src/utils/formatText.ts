export const formatText = (text: string) => {
  if (text.length > 350) {
    return text.slice(0, 350) + '...'
  }

  return text
}
