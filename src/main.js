// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import VueVideoPlayer from 'vue-video-player'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(VueVideoPlayer)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
