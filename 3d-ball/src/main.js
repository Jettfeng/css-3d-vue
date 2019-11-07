// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import '../static/js/three.min.js'
// import '../static/js/tween.min.js'
// import '../static/js/CSS3DRenderer.js'
// import '../static/js/TrackballControls.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
