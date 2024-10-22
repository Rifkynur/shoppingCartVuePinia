<script setup>
const arrays = [1, 2, 3, 4, 5]
const props = defineProps({
  rating: {
    default: 5,
    type: Number,
  },
})
</script>

<template>
  <div>
    <i
      v-for="(item, index) in arrays"
      :key="index"
      :class="{
        'text-yellow-600': rating >= index + 1,
        'pi pi-star-fill ': true,
      }"
    ></i>
  </div>
</template>
