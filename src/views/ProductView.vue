<script setup>
import {  onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import AppLayout from '../layout/AppLayout.vue'
import SpinnerIcon from '../components/icons/SpinnerIcon.vue'

const route = useRoute();
const productId = route.params.id

const product = ref({})
const isLoading = ref(true)

const fetchProductId = () =>{
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then(json=>{
        product.value = json
        isLoading.value = false
    })
}

onMounted(()=>{
    fetchProductId()
})
</script>

<template>
  <app-layout>
    <div v-if="isLoading">
      <div class="fixed inset-0 w-full h-full grid place-items-center bg-teal-100/60 z-50">
        <spinner-icon />
      </div>
    </div>
    <div v-else>
      <product-details :product="product" />
    </div>
  </app-layout>
</template>
