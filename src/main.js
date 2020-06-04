import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store'
import bus from './bus'
import VueAxios from 'vue-axios'
import axios from 'axios'
    
Vue.use(VueAxios,axios)

Vue.prototype.$bus = bus
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  // template: '<router-view></router-view>',
}).$mount('#app')
