<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'
import Logo from '@/assets/logo.svg'
import { computed } from 'vue'

const carts = useCartStore()

const totalItems = computed(() =>
  carts.carts.reduce((total, item) => total + item.quantity, 0),
)
</script>

<template>
  <nav class="flex w-full justify-between items-center px-4 lg:px-20 py-10">
    <RouterLink to="/">
      <img :src="Logo" alt="logo" class="size-14" />
    </RouterLink>
    <RouterLink to="/cart">
      <div
        class="bg-primary p-3 rounded-full flex justify-center items-center relative"
      >
        <div
          class="size-6 absolute p-2 -top-3 -right-3 bg-red-700 rounded-full flex justify-center items-center"
        >
          <span class="text-white font-bold text-xs bg-red-700">{{
            totalItems
          }}</span>
        </div>
        <i class="pi pi-shopping-cart text-2xl text-white bg-primary"></i>
      </div>
    </RouterLink>
  </nav>
</template>
