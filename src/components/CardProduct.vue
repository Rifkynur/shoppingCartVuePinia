<script setup>
import { RouterLink } from 'vue-router'
import bag from '@/assets/bag.jpg'
import Rating from '@/components/Rating.vue'
import { useCartStore } from '@/stores/cart.js'

const props = defineProps({
  product: {
    type: Object,
  },
})

const cart = useCartStore()
</script>

<template>
  <div
    class="border-2 border-[#1E5128] rounded-md shadow-xl p-4 text-white flex flex-col justify-between items-center gap-6"
  >
    <RouterLink :to="`/product/${props.product.id}`">
      <img
        :src="props.product.thumbnail"
        alt="product"
        class="h-40 object-cover"
      />
    </RouterLink>
    <h2 class="font-bold">{{ props.product.title }}</h2>
    <div class="flex justify-between items-center w-full">
      <h3>$12341234</h3>
      <Rating :rating="props.product.rating" />
    </div>
    <button
      class="bg-[#1C82AD] text-white font-semibold px-3 py-1 rounded-full"
      @click="cart.addToCart(product)"
    >
      Add to Cart
    </button>
  </div>
</template>
