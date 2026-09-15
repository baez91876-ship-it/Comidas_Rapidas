import { computed, reactive } from 'vue'

const cart = reactive({ items: [] })

export const useCart = () => {
  const addToCart = (product, quantity = 1) => {
    const amount = Math.max(1, Math.floor(Number(quantity) || 1))
    const existing = cart.items.find((item) => item.name === product.name)

    if (existing) {
      existing.quantity += amount
      return
    }

    cart.items.push({ ...product, quantity: amount })
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

  const setQuantity = (productName, quantity) => {
    const item = cart.items.find((entry) => entry.name === productName)
    if (!item) return

    item.quantity = Math.max(1, Math.floor(Number(quantity) || 1))
  }

  const itemCount = computed(() => cart.items.reduce((total, item) => total + item.quantity, 0))
  const total = computed(() => cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0))

  return { cart, addToCart, removeFromCart, changeQuantity, setQuantity, itemCount, total }
}
