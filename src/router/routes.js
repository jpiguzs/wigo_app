
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/Index.vue') }
    ]
  },
  {
    path: '/budget',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/budget/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    
    children: [
      { path: '', component: () => import('pages/auth/Index.vue'), name:'login', params:{action:1} }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/MainLayout.vue'),
    
    children: [
      { path: '', component: () => import('pages/auth/Index.vue'), name:'register' , params:{action:1}}
    ]
  },
  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/users/Users.vue') }
    ]
  },
  {
    path: '/request',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/request/Request.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
