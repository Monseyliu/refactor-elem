import Vue from 'vue'
import VueRouter from 'vue-router'

//主路由
const Home = () => import("pages/home/home")
//子路由
const HomeShops = () => import("pages/home-shops/home-shops")
const Search = () => import("pages/search/search")
const Order = () => import("pages/order/order")
const Msite = () => import("pages/msite/msite")

//一级路由
const Login = () => import("common/login/login")



Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', redirect: '/homeshops', component: Home, children: [
      { path: '/homeshops', component: HomeShops },
      { path: '/search', component: Search },
      { path: '/order', component: Order },
      { path: '/msite', component: Msite },
    ]
  },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

//登录控制
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path === '/login') return next();
  isLogin ? next() : next('/login')
})


export default router
