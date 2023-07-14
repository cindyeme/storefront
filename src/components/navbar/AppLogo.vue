<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/">
    <div class="items-baseline gap-3 hidden md:flex cursor-pointer">
      <img alt="Logo" src="@/assets/dog-api-logo.svg" width="35" height="30" />
      <div class="hidden lg:block lg:text-2xl align-bottom">Bark Avenue</div>
    </div></RouterLink
  >
</template>
