import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from './store'
import store from './store'
// import {private_key_id, client_id} from '../jefabrik-analytics-a58554767aca.json'
import VueGoogleApi from 'vue-google-api'
 
const config = {
  apiKey: 'a58554767acab5c54ae34492984429966224d7f4',
  clientId: '107372661092660537871.apps.googleusercontent.com',
  scope: 'https://analyticsdata.googleapis.com',
  discoveryDocs: [ 'https://analyticsdata.googleapis.com/$discovery/rest?version=v1beta' ]
}
Vue.use(VueGoogleApi, config)

Vue.config.productionTip = false

new Vue({
  router,
  Vuex,
  store,
  render: h => h(App)
}).$mount('#app')