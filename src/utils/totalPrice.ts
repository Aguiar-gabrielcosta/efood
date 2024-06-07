export const totalPrice = (items: Product[]) => {
  return items.reduce((total, item) => {
    return (total += item.preco)
  }, 0)
}
