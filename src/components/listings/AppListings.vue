<script>
import ListCard from './ListCard.vue'
import AppLoader from '../AppLoader.vue'
import { mapState, mapActions } from 'vuex'
import AppSearch from '../AppSearchWrapper.vue'

export default {
  components: {
    ListCard,
    AppLoader,
    AppSearch
  },
  data() {
    return {
      searchTerm: ''
    }
  },
  computed: {
    ...mapState(['dogs', 'isLoading', 'filteredDogImages']),
    filteredDogs() {
      if (this.searchTerm) {
        return this.filteredDogImages
      } else {
        return this.dogs
      }
    }
  },

  mounted() {
    this.getDogs()
  },

  methods: {
    ...mapActions(['getDogs', 'filterDogImages']),
    searchDogs() {
      this.filterDogImages(this.searchTerm)
    }
  }
}
</script>

<template>
  <div v-if="isLoading">
    <AppLoader />
  </div>
  <div class="pt-24" v-else>
    <div class="flex flex-col gap-3 items-center justify-center mb-6">
      <h1 class="text-xl md:text-[1.4rem] font-bold">Search Dogs by Breed</h1>
      <AppSearch>
        <input
          type="search"
          class="rounded-full text-sm flex-1 focus:shadow-none focus:outline-0 focus:border-0 h-full w-full px-4"
          placeholder="Enter breed"
          v-model="searchTerm"
          @input="searchDogs"
        />
        <button
          type="button"
          class="text-sm px-6 text-white flex flex-row items-center gap-3 cursor-pointer bg-teal-500 rounded-full py-2 focus:outline-none focus:border-0"
          @click="searchDogs"
        >
          Search
        </button>
      </AppSearch>
    </div>

    <div
      v-if="filteredDogs.length > 0"
      class="
            grid 
            grid-cols-1 
            xs:grid-cols-2 
            sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6
          "
    >
      <ListCard v-for="dog in filteredDogs" :key="dog" :dog="dog" />
    </div>
    <div v-else>
      <p class="text-center">No dogs found, search a different or clear the search term!</p>
    </div>
  </div>
</template>
