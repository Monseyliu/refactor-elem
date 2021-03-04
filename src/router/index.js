import Vue from 'vue'
import VueRouter from 'vue-router'

//主路由
const Home = () => import("pages/home/home")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
