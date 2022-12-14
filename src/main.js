import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps" // Import package
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB8OGZWzR-KvxYj11NAQ2eEmLFbiopEwhQ",
    libraries: "places"
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')