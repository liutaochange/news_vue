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
Vue.config.productionTip = false;

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlEle = document.getElementsByTagName("html")[0];
htmlEle.style.fontSize = htmlWidth/10 + "px";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
