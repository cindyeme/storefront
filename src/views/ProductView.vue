<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import AppLayout from '../layout/AppLayout.vue'
import SpinnerIcon from '../components/icons/SpinnerIcon.vue'

const route = useRoute()
const productId = route.params.id

const product = ref({})
const isLoading = ref(true)

const fetchProductId = () => {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((json) => {
      product.value = json
      isLoading.value = false
    })
    .catch((error) => {
      throw new Error(error)
    })
}

const notAFunctionError = () => {
  let someArray = [{ func: function () {} }]
  someArray[1].func()
}

onMounted(() => {
  fetchProductId()
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
      <product-details :product="product" @custom-click="notAFunctionError" />
    </div>
  </app-layout>
</template>
