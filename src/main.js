import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//css
import "style/index.css"
import axios from 'axios'
//mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(MintUI);

//请求和响应拦截
axios.interceptors.request.use(config => {
  Indicator.open();
  return config;
}, error => {
  return Promise.reject(error)
});
axios.interceptors.response.use(response => {
  Indicator.close();
  return response;
}, error => {
  return Promise.reject(error);
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
