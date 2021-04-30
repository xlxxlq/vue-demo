import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/login'
import Error from '@/pages/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
      redirect: '/login',
      children: [
        {
            path: 'login',
            name: 'Login',
            component: Login
        },
      ]
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/error',
        name: 'Error',
        component: Error
    },
    // {
    //     path: '/404',
    //     component: () => import('@/pages/404'),
    // },
    {
        path:'*',
        component:() => import('@/pages/404'),
    },
  ]
})
