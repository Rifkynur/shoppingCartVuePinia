import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const carts = ref([])

  const addToCart = product => {
    const existingCart = carts.value.find(item => item.id === product.id)

    if (existingCart) {
      carts.value = carts.value.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    } else {
      carts.value.push({ ...product, quantity: 1 })
    }
  }

  const clearCart = () => {
    carts.value = []
  }

  const increaseCart = id => {
    carts.value = carts.value.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    )
  }

  const decreaseCart = id => {
    carts.value = carts.value
      .map(item =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )
      .filter(item => item.quantity > 0)
  }

  const deleteCart = id => {
    carts.value = carts.value.filter(item => item.id !== id)
  }
  const getTotalPrice = computed(() =>
    carts.value.reduce((total, item) => total + item.price * item.quantity, 0),
  )
  return {
    addToCart,
    carts,
    getTotalPrice,
    clearCart,
    increaseCart,
    decreaseCart,
    deleteCart,
  }
})
