<script setup>
import { RouterLink } from 'vue-router'

defineProps(['dog'])
</script>

<template>
  <div class="col-span-1 cursor-pointer group">
    <div class="flex flex-col w-full">
      <RouterLink :to="{ name: 'dog', params: { id: '1' } }">
        <div class="w-full relative mb-3">
          <figure>
            <img
              class="object-cover w-full h-full xs:h-[300px] overflow-hidden transition rounded-xl bg-gray-400"
              :src="dog"
              loading="lazy"
              alt="Dog"
            />
          </figure></div
      ></RouterLink>
    </div>
  </div>
</template>
