import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('views/index')
const basketball = () => import('views/basketball')
const footerball = () => import('views/footerball')
const news = () => import('views/news')
const video = () => import('views/video')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'index',
      component: index
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/basketball',
      name: 'basketball',
      component: basketball
    },
    {
      path: '/footerball',
      name: 'footerball',
      component: footerball
    },
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
