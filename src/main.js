// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './store/index'
import routes from './routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'
import './assets/styles/index.css'
import { infiniteScroll } from 'vue-infinite-scroll'
import Modal from './components/common/modal/UiModal'
Vue.use(VueRouter)

Vue.component('ui-modal', Modal)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const accessToken = window.sessionStorage.getItem('token')
  let auth = to.matched[0].meta.requiresAuth
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  directives: { infiniteScroll },
  store,
  render: h => h(App)
})
