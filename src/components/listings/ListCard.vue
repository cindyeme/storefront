<script setup>
defineProps(['dog'])
</script>

<template>
  <div class="col-span-1 cursor-pointer group">
    <div class="flex flex-col w-full">
      <div class="aspect-square w-full relative rounded-xl mb-3">
        <img
          v-if="dog"
          class="object-cover w-full h-[300px] overflow-hidden transition rounded-xl"
          :src="dog"
          loading="lazy"
          alt="Dog"
        />
        <img
          v-else
          src="https://placehold.co/800?text=Bark+Avenue&font=roboto"
          class="object-cover w-full h-[300px] overflow-hidden transition rounded-xl"
          alt="No image"
        />
      </div>
    </div>
  </div>
</template>
