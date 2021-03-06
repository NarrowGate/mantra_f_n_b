import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import App from './App.vue'
import router from './router'
import './registerServiceWorker'


import './../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
