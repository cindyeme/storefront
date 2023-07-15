<script setup>
import { RouterLink } from 'vue-router'
// import VueBlurHash from 'vue-blurhash'
defineProps(['dog'])
</script>

<template>
  <div class="col-span-1 cursor-pointer group">
    <div class="flex flex-col w-full">
      <RouterLink :to="{ name: 'dog', params: { id: '1' } }">
        <div class="w-full relative mb-3">
          <!-- <VueBlurHash
            :src="dog"
            hash="LdHfL}oJR$WBKnfi%3ofT0kCM{ay"
            :width="300"
            :height="400"
            :resolutionX="32"
            :resolutionY="32"
            :punch="1"
          /> -->
          <figure>
            <img
              class="object-cover w-full h-full xs:h-[300px] overflow-hidden transition rounded-xl bg-gray-400"
              :src="dog"
              loading="lazy"
              alt="Dog"
            />
          </figure>
        </div></RouterLink
      >
    </div>
  </div>
</template>
