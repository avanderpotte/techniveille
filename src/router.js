import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Category from './components/Category'

Vue.use(VueRouter)

class Router extends VueRouter {
  constructor () {
    super({
      hashbang: false,
      history: true,
      abstract: false,
      saveScrollPosition: false,
      transitionOnLoad: false
    })
    this.map({
      '*': {
        name: 'default',
        component: Home
      },
      '/': {
        name: 'home',
        component: Home
      },
      '/:category': {
        name: 'category',
        component: Category
      }
    })
  }
}

export default new Router()
