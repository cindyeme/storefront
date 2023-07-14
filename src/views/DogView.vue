<template>
  <AppContainer>
    <div class="grid grid-cols-12 pt-32 gap-8">
      <div class="col-span-full md:col-span-5 h-full">
        <div class="flex flex-col space-y-12">
          <CloudImage imageName="dog" />
          <!-- <img src="http://via.placeholder.com/640x360" class="w-100 rounded-xl" /> -->
          <div class="flex items-center space-x-3">
            <button
              class="rounded px-4 py-3 lg:text-lg text-white bg-teal-500"
              @click="handleFilterChange('cartoonify')"
            >
              Cartoonify
            </button>
            <button
              class="rounded px-4 py-3 lg:text-lg text-white bg-teal-500"
             @click="handleFilterChange('grayscale')"
            >
              Grayscale
            </button>
            <button
              class="rounded px-4 py-3 lg:text-lg text-white bg-teal-500"
             @click="handleFilterChange('sepia')"
            >
              Sepia
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-full md:col-span-7">
        <div class="flex flex-col space-y-5">
          <h1 class="text-2xl font-bold">Caucasian Shepherd Dog</h1>

          <p class="mt-4 leading-relaxed">
            The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus
            Mountains region. These dogs are large in size, with a thick double coat to protect them
            from the cold. They have a regal bearing, with a proud and confident demeanor. They are
            highly intelligent and loyal, making them excellent guard dogs. They are courageous and
            alert, with an instinct to protect their family and property. They are highly trainable,
            but require firm and consistent training.
          </p>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppContainer from '../components/AppContainer.vue'
import CloudImage from '../components/CloudImage.vue'


export default {
  props: ['id'],
  computed: {
    ...mapState(['dog', 'effect'])
  },
  mounted() {
    this.getDog(this.id)
  },
  methods: {
    ...mapActions(['getDog', 'applyFilterToDog']),
    handleFilterChange(effect) {
      this.applyFilterToDog(effect)
    }
  },
  components: { AppContainer, CloudImage }
}
</script>
