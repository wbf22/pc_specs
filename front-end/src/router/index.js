import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VoteView from '../views/Vote.vue'
import BuildingView from '../views/Building.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vote',
    name: 'vote',
    component: VoteView
  },
  {
    path: '/building',
    name: 'building',
    component: BuildingView
  }
]

const router = new VueRouter({
  routes
})

export default router
