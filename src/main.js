// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './store/index'
import routes from './routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/index.css'
import { infiniteScroll } from 'vue-infinite-scroll'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const accessToken = window.sessionStorage.getItem('token')
  const allowArray = ['home', 'article', 'login']
  let isBreak = 0
  allowArray.forEach((item) => {
    if (to.name === item) {
      isBreak += 1
    }
  })
  console.log(accessToken, 'This is token')
  if (isBreak || accessToken) {
    next()
  } else {
    next('/login')
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
