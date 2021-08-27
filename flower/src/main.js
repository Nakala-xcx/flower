import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Top from './components/Top'
import Cart from './components/Cart'
import axios from 'axios'


axios.defaults.baseURL="http://127.0.0.1:5050";
Vue.prototype.axios=axios
axios.defaults.withCredentials=true
Vue.config.productionTip = false
Vue.component("my-header",MyHeader);
Vue.component("my-footer",MyFooter);
Vue.component('cart',Cart)
Vue.component('top',Top);
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
