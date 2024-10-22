<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/product.js'
import { useCartStore } from '@/stores/cart.js'
import Rating from '@/components/Rating.vue'

const products = useProductsStore()
const cart = useCartStore()
const route = useRoute()
const productId = route.params.id

onMounted(() => {
  products.getDataById(productId)
  console.log(products.product)
})
</script>

<template>
  <div class="mt-8">
    <p v-if="products.isLoading">Loading...</p>
    <div
      v-else
      class="mx-auto max-w-3xl flex justify-center items-center gap-8"
    >
      <img
        :src="products.product.thumbnail"
        :alt="products.product.title"
        class="size-80 object-cover"
      />
      <div class="flex flex-col gap-4 items-start">
        <h3 class="font-bold text-2xl">{{ products.product.title }}</h3>
        <h4 class="font-semibold">$ {{ products.product.price }}</h4>
        <p>{{ products.product.description }}</p>
        <Rating :rating="products.product.rating" />
        <button
          @click="cart.addToCart(products.product)"
          class="bg-green-700 text-white rounded-full px-4 py-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
