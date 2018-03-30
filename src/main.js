// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import fastclick from 'fastclick'
import store from './store'
Vue.use(MuseUI)
fastclick.attach(document.body)
Vue.config.productionTip = false
getRem(640, 100)
window.onresize = function () {
  getRem(640, 100)
}
function getRem (pwidth, prem) {
  var html = document.getElementsByTagName('html')[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  if (oWidth >= 640) {
    oWidth = 640
  }
  html.style.fontSize = oWidth / pwidth * prem + 'px'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
