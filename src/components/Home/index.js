import Vue from 'vue'
import Data from '../../data'
import Animate from './animate'

export default Vue.extend({
  name: 'Home',
  template: require('./template.html'),

  /* eslint-disable no-new */
  ready () {
    new Animate()
  },

  data () {
    return {
      categories: Data
    }
  }
})
