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
    path: '/backstage/',
    meta: { 'requiresAuth': true },
    redirect: '/backstage/write',
    component: resolve => require(['./components/Backstage/Index'], resolve),
    children: [
      {
        path: 'write',
        component: resolve => require(['./components/Backstage/Write'], resolve)
      },
      {
        path: 'articleList',
        component: resolve => require(['./components/Backstage/ArticleList'], resolve)
      },
      {
        path: 'setting',
        component: resolve => require(['./components/Backstage/Setting/Index'], resolve),
        redirect: '/backstage/setting/pwd',
        children: [
          {
            path: 'pwd',
            component: require('./components/Backstage/Setting/Pwd')
          },
          {
            path: 'nav',
            component: require('./components/Backstage/Setting/NavList')
          },
          {
            path: 'userInfo',
            component: require('./components/Backstage/Setting/UserInfo')
          },
          {
            path: 'socailContact',
            component: require('./components/Backstage/Setting/SocailContact')
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: resolve => require(['./components/NotFound'], resolve)
  }
]

export default routes
