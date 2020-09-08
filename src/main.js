import Vue from 'vue'
import App from './App.vue'
// Add router component to Project
import VueRouter from 'vue-router'
// Import routes
import defaultRoutes from '@/router/index'
// Import State Manager
import Vuex from 'vuex'
// Import Store
import { store } from '@/store'

// Routes
const router = new VueRouter({
  mode: 'history',
  routes: [...defaultRoutes]
})

// Add router to Project
Vue.use(VueRouter)
Vue.use(router)

// Add Vuex State To Project
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

Vue.config.productionTip = false
