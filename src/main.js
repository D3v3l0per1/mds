import Vue from 'vue'

import Navbar from './components/Navbar'

import HelloWorld from './components/HelloWorld'

Vue.component('nav-bar', Navbar)
Vue.component('helloWorld', HelloWorld)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})
