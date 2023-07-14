import { createRouter, createWebHistory } from 'vue-router'
import DogListView from '../views/DogList.vue'
import DogViewVue from '../views/DogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/dogs'
    // },
    {
      path: '/',
      name: 'dogs',
      component: DogListView,
    },
    {
      path: '/dogs/:id',
      component: DogViewVue,
      name: 'dog',
      props: true
    }
  ]
})

export default router
