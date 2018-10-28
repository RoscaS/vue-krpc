import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from "buefy"


import "@fortawesome/fontawesome-pro/css/all.min.css"
import "buefy/dist/buefy.css"


// import krpc from '../browser/KRPC'

Vue.use(Buefy);
// Vue.use(krpc);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
