<template>
  <div class="card">
    <div class="grid md:grid-cols-2 gap-4 lg:gap-10">
      <div class="p-7">
        <VLazyImage
          :src="product.image"
          alt="product img"
          class="mx-auto my-7 max-w-[400px] md:max-w-full lg:max-w-[400px]"
        />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex items-center gap-2">
          <i class="material-icons">+</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import VLazyImage from "v-lazy-image";
defineProps(["product"]);
</script>

<style scoped>
.v-lazy-image {
  filter: blur(20px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
