<script>
import ListCard from './ListCard.vue'
import AppLoader from '../AppLoader.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ListCard,
    AppLoader
  },

  computed: mapState({
    dogs: 'dogs',
    isLoading: 'isLoading'
  }),

  mounted() {
    this.getDogs()
  },

  methods: mapActions(['getDogs'])
}
</script>

<template>
  <div v-if="isLoading">
    <AppLoader />
  </div>
  <div v-else>
    <div
      className="
            pt-24
            grid 
            grid-cols-1 
            xs:grid-cols-2 
            md:grid-cols-3 lg:grid-cols-4 gap-8
          "
    >
      <ListCard v-for="dog in dogs" :key="dog" :dog="dog" />
    </div>
  </div>
</template>
