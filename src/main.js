import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store'
import bus from './bus'

Vue.prototype.$bus = bus
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  // template: '<router-view></router-view>',
}).$mount('#app')
