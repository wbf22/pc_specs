import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mockSpecs from './mock-specs.js'
import mockSpecsCheap from './mock-specs-cheap.js'

let data = {
  recommendedSpecs: mockSpecs,
  recommendedSpecsCheap: mockSpecsCheap,
}


new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
