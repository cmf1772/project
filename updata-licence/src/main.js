import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import { Popup,Picker, } from 'vant';

Vue.config.productionTip = false

Vue.use(Popup);
Vue.use(Picker);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
