import Vue from 'vue'
import Data from '../../data'

export default Vue.extend({
  name: 'Category',
  template: require('./template.html'),

  ready () {
    let key = this.$route.params.category
    this.data = Data[key]
  },

  data () {
    return {
      data: this.data
    }
  }
})
