// import { userSetter } from 'core-js/fn/symbol'
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'


Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {hideInMenu: false}
  },
  {
    path:'/users',
    name:'Users',
    component: Users,
    meta:{hideInMenu: false}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {hideInMenu: true}
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  
  const isAuth = localStorage.getItem("jwt-token")
  
  if (to.meta.private === true){
    if (isAuth){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})
  
export default router
