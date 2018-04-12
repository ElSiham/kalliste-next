import Vue from 'vue'
import App from './App'
import { Plugin } from '../src'

Vue.use(Plugin)

new Vue({
  components: { App },
  template: '<App />',
}).$mount('#app')
