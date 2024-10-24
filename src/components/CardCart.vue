<script setup>
import bag from '@/assets/bag.jpg'
import { useCartStore } from '@/stores/cart.js'
import { computed } from 'vue'

const carts = useCartStore()
const props = defineProps({
  cart: {
    type: Object,
    required: true,
  },
})

const cost = computed(() => (props.cart.quantity * props.cart.price).toFixed(2))
</script>

<template>
  <div class="mt-4 border-b py-2 border-black">
    <div class="flex justify-between gap-2">
      <div class="flex items-center gap-2 lg:gap-8">
        <img
          :src="props.cart.thumbnail"
          :alt="props.cart.title"
          class="size-16 lg:size-40"
        />
        <div>
          <h3 class="text-sm lg:text-2xl font-bold capitalize">
            {{ props.cart.title }}
          </h3>
          <h4 class="font-semibold">$ {{ props.cart.price }}</h4>
        </div>
      </div>
      <div class="flex gap-2 lg:gap-5 items-center">
        <button
          @click="carts.decreaseCart(props.cart.id)"
          class="p-3 rounded-md font-bold text-xl bg-red-500 text-white"
        >
          -
        </button>
        <p class="font-bold">{{ props.cart.quantity }}</p>
        <button
          @click="carts.increaseCart(props.cart.id)"
          class="p-3 rounded-md font-bold text-xl bg-green-600 text-white"
        >
          +
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between mt-8">
      <div class="font-semibold text-xl">Total :$ {{ cost }}</div>
      <button class="bg-red-600 p-3 lg:p-4 rounded-xl">
        <i
          @click="carts.deleteCart(props.cart.id)"
          class="pi pi-trash bg-red-600 text-sm lg:text-xl font-bold text-white"
        ></i>
      </button>
    </div>
  </div>
</template>
