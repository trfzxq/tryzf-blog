import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Detaile from '../views/Detaile.vue'
import Login from '../views/Login.vue'
import Archive from '../views/Archive.vue'
import About from '../views/About.vue'

import Backend from '../views/backend/Backend.vue'
import Write from '../views/backend/Write.vue'
import Articles from '../views/backend/Articles.vue'
import Setting from '../views/backend/Setting.vue'

import Info from '../views/backend/setting/Info.vue'
import Nav from '../views/backend/setting/Nav.vue'
import Pwd from '../views/backend/setting/Pwd.vue'
import Sc from '../views/backend/setting/Sc.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  // linkActiveClass: 'is-active',
  routes: [
    { path: '/', component: Home },
    { path: '/detaile/:id', component: Detaile },
    { path: '/login', component: Login },
    { path: '/archive', component: Archive },
    { path: '/about', component: About },
    {
      path: '/backend/',
      component: Backend,
      meta: { 'requiresAuth': true },
      redirect: '/backend/pulish',
      children: [
        { path: 'pulish', component: Write },
        { path: 'manage', component: Articles },
        {
          path: 'setting',
          component: Setting,
          redirect: '/backend/setting/info',
          children: [
            { path: 'info', component: Info },
            { path: 'nav', component: Nav },
            { path: 'pwd', component: Pwd },
            { path: 'sc', component: Sc }
          ]
        }
      ]
    },
    { path: '*', component: Home }
  ]
})
