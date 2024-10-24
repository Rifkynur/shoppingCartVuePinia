<script setup>
import { useCartStore } from '@/stores/cart.js'
import CardCart from '@/components/CardCart.vue'

const carts = useCartStore()
</script>

<template>
  <div class="px-4 lg:px-10 pb-10">
    <h1 class="text-3xl font-bold">Cart</h1>
    <CardCart v-for="cart in carts.carts" :key="cart.id" :cart="cart" />
    <div class="flex items-end justify-between mt-8">
      <div>
        <button
          @click="carts.clearCart"
          class="bg-primary text-white px-4 py-2 rounded-md"
        >
          Empty Cart
        </button>
      </div>
      <div>
        <h4 class="font-bold text-xl">
          Total : $ {{ carts.getTotalPrice.toFixed(2) }}
        </h4>
        <button
          class="px-4 py-2 text-white font-bold bg-blue-600 rounded-md mt-2"
        >
          checkout
        </button>
      </div>
    </div>
  </div>
</template>
