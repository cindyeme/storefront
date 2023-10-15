import { createStore } from 'vuex'
import productsApi from '../api/products';

const store = createStore({
  state: {
    products: [],
    product: {},
    isLoading: false
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },

    SET_PRODUCT(state, product) {
      state.product = product
    },

    LOADING_STATUS(state, loadingState) {
      state.isLoading = loadingState
    }
  },

  actions: {
    // Define your actions here
    async getProducts({ commit }) {
      commit('LOADING_STATUS', true)
      try {
        const response = await productsApi.all()
        commit('SET_PRODUCTS', response.data)
        commit('LOADING_STATUS', false)
      } catch (error) {
        console.log(error)
      }
    },

    async getProduct({ commit }, productId) {
      commit('LOADING_STATUS', true)
      try {
        const response = productsApi.single(productId)
        commit('SET_PRODUCT', response.data)
        commit('LOADING_STATUS', false)
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {
    // Define your getters here
  }
})

export default store
