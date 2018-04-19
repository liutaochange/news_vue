// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
fastclick.attach(document.body)
Vue.config.productionTip = false
function rem () {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.getElementsByTagName('html')[0]
  if (htmlWidth >= 540) {
    htmlWidth = 540
  }
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'
}
rem()
window.addEventListener('resize', function () {
  rem()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
