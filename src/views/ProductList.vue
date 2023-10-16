<script setup>
import { onMounted, ref } from 'vue'
import SpinnerIcon from '../components/icons/SpinnerIcon.vue'
import ProductCard from '../components/ProductCard.vue'
import AppLayout from '../layout/AppLayout.vue'

const products = ref([])
const isLoading = ref(true)

const getProducts = () => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((result) => {
      products.value = result
      isLoading.value = false
    })
    .catch((error) => {
      throw new Error(error)
    })
}

// const throwError = async () => {
//   throw new Error('Sentry Error')
// }

onMounted(() => {
  getProducts()
})
</script>

<template>
  <app-layout>
    <div v-if="isLoading">
      <div class="fixed inset-0 w-full h-full grid place-items-center bg-teal-100/40 z-50">
        <spinner-icon />
      </div>
    </div>
    <div v-else>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div v-for="p in products" :key="p.id">
          <product-card :product="p" />
        </div>
      </div>
    </div>
  </app-layout>
</template>
