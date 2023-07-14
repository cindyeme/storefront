<script setup>
import { HalfCircleSpinner } from 'epic-spinners'
</script>

<template>
  <div class="fixed inset-0 w-full h-full grid place-items-center bg-teal-100/60 z-50">
    <half-circle-spinner :animation-duration="1000" :size="80" color="#14baa6" />
  </div>
</template>
