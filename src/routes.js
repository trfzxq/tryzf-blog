const routes = [
  {
    path: '/',
    component: resolve => require(['./components/Home/index'], resolve)
  },
  {
    path: '*',
    component: resolve => require(['./components/NotFound'], resolve)
  }
]

export default routes
