const routes = [
  {
    path: '/',
    component: resolve => require(['./components/Home/index'], resolve)
  },
  {
    path: '/article/:id',
    component: resolve => require(['./components/Detaile/index'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['./components/Login/index'], resolve)
  },
  {
    path: '*',
    component: resolve => require(['./components/NotFound'], resolve)
  }
]

export default routes
