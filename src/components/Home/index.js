import Vue from 'vue'
import Data from '../../data'

export default Vue.extend({
  name: 'Home',
  template: require('./template.html'),

  data () {
    return {
      categories: Data
    }
  }
})
