import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:index
  },
  {
    path: '/details/:lid',
    component: () => import(/* webpackChunkName: "details" */ '../views/details.vue'),
    props:true
  },
  {
    path:'/login',
    component:()=>import(/* webpackChunkName: "login" */
     '../views/login.vue')
  },
  {
    path:'/changepwd',
    component:()=>import(/* webpackChunkName: "ChangePwd" */
     '../views/ChangePwd.vue')
  },
  {
    path:'/register',
    component:()=>import(/* webpackChunkName: "ChangePwd" */
     '../components/Register.vue')
  },
  {
    path:'/products/:kw',
    component:()=>import(/* webpackChunkName: "Products" */
    '../views/Products.vue'),
    props:true
  },
  {
    path:'/cartitem',
    component:()=>import(/* webpackChunkName: "cartItem" */
     '../components/cartItem.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
