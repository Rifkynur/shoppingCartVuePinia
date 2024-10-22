<script setup>
import CardProduct from '@/components/CardProduct.vue'
import { useProductsStore } from '@/stores/product.js'
import { onMounted } from 'vue'
const products = useProductsStore()

onMounted(() => {
  products.fetchData()
})
</script>

<template>
  <main class="px-12">
    <p v-if="products.islaoding">Loading....</p>
    <div v-else class="grid grid-cols-3 gap-4">
      <CardProduct
        v-for="(product, index) in products.products"
        :key="index"
        :product="product"
      />
    </div>
  </main>
</template>
