import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const product = ref()
  const isLoading = ref(true)
  const isError = ref('')

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const result = await response.json()
      products.value = await result.products
    } catch (error) {
      isError.value = error.message
    } finally {
      isLoading.value = false
    }
  }

  const getDataById = async id => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const result = await response.json()
      product.value = await result
    } catch (error) {
      console.log(error)
      isError.value = error.message
    } finally {
      isLoading.value = false
    }
  }
  return { products, fetchData, isError, isLoading, getDataById, product }
})
