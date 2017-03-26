import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Detaile from '../views/Detaile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  // linkActiveClass: 'is-active',
  routes: [
    { path: '/', component: Home },
    { path: '/detaile/:id', component: Detaile }
  ]
})
