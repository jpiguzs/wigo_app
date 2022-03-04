
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/menu/Menu.vue') }
    ]
  },
  {
    path: '/menu',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/menu/Menu.vue') }
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
