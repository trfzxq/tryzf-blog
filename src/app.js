import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import toast from 'components/toast.js'
import modal from 'components/modal.js'

Vue.use(toast)
Vue.use(modal)

sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.beforeEach((to, from, next) => {
  const accessToken = store.state.token
  let auth = (typeof to.matched[0].meta !== 'undefined') && to.matched[0].meta.requiresAuth || false
  if (auth) {
    if (!accessToken) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
