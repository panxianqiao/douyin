// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import '@/assets/style/reset.css'
import {
  Container,
  CommonHeader,
  CommonFooter
} from '@/components'

Vue.component('Container', Container) // 头部组件
Vue.component('CommonHeader', CommonHeader) // 头部组件
Vue.component('CommonFooter', CommonFooter) // 头部组件

Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
