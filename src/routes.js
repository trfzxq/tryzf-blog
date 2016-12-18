const routes = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['./components/Home/index'], resolve)
  },
  {
    path: '/article/:id',
    name: 'article',
    component: resolve => require(['./components/Detaile/index'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./components/Login/index'], resolve)
  },
  {
    path: '/backstage/write',
    component: resolve => require(['./components/Backstage/Write'], resolve)
  },
  {
    path: '*',
    component: resolve => require(['./components/NotFound'], resolve)
  }
]

export default routes
