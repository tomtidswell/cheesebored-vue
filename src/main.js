import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

var x = []
axios.get('http://cheesebored.herokuapp.com/cheeses')
  .then(res => x = res.data)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

