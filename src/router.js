import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Page from './components/Page'
import Detail from './components/Detail'

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
      '/page': {
        name: 'about',
        component: Page,
        subRoutes: {
          '/:id': {
            name: 'detail',
            component: Detail
          }
        }
      }
    })
  }
}

export default new Router()
