<template>
  <div class="card text-center">
    <VLazyImage :src="product.image" alt="product thumb" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <RouterLink :to="`/${product.id}`"><span class="btn mt-4 mb-1">View details</span></RouterLink>
  </div>
</template>

<script setup>
import VLazyImage from 'v-lazy-image'
defineProps(['product'])
</script>

<style scoped>
.thumb {
  max-height: 120px;
  height: 100%;
  max-width: 70%;
  margin: 0 auto;
}
.v-lazy-image {
  filter: blur(20px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
