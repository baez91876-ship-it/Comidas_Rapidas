import { computed, reactive } from 'vue'

const cart = reactive({ items: [] })

export const useCart = () => {
  const addToCart = (product) => {
    const existing = cart.items.find((item) => item.name === product.name)

    if (existing) {
      existing.quantity += 1
      return
    }

    cart.items.push({ ...product, quantity: 1 })
  }

  const removeFromCart = (productName) => {
    const index = cart.items.findIndex((item) => item.name === productName)
    if (index !== -1) cart.items.splice(index, 1)
  }

  const changeQuantity = (productName, amount) => {
    const item = cart.items.find((entry) => entry.name === productName)
    if (!item) return

    item.quantity += amount
    if (item.quantity <= 0) removeFromCart(productName)
  }

  const itemCount = computed(() => cart.items.reduce((total, item) => total + item.quantity, 0))
  const total = computed(() => cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0))

  return { cart, addToCart, removeFromCart, changeQuantity, itemCount, total }
}
