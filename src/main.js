import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from './store'
import store from './store'
import {web} from '../code_secret_client_984885545866-7c3s42ppmb6mlrb3saq3lt0l9i47p3np.apps.googleusercontent.com.json'
import VueGoogleApi from 'vue-google-api'
import axios from 'axios'
 
const config = {
  apiKey: web.api_key,
  clientId: web.client_id,
  scope: 'https://analyticsdata.googleapis.com',
  discoveryDocs: [ 'https://analyticsdata.googleapis.com/$discovery/rest?version=v1beta' ]
}
Vue.prototype.$http = axios

Vue.use(VueGoogleApi, config)

Vue.config.productionTip = false

new Vue({
  router,
  Vuex,
  store,
  render: h => h(App)
}).$mount('#app')