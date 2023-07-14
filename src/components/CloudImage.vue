<script setup>
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/vue'
import { cartoonify,grayscale, sepia } from '@cloudinary/url-gen/actions/effect'
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore()
// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
    // cloudName: 'dtzojbbze'
  }
})

const props = defineProps({
  imageName: String,
  filter: String
})

const myImage = computed(() => {
  const image = cld.image(props.imageName)
  const filter = store.state.effect

  // Apply the selected filter based on Vuex state
  if (filter === 'cartoonify') {
    image.effect(cartoonify())
  } else if (filter === 'grayscale') {
    image.effect(grayscale())
  } else if (filter === 'sepia') {
    image.effect(sepia())
  }

  return image
})

</script>

<template>
  <AdvancedImage :cldImg="myImage" />
</template>
