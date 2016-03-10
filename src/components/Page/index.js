import Vue from 'vue'

export default Vue.extend({
  name: 'Page',
  template: require('./template.html'),

  data () {
    return {
      msg: 'Page'
    }
  }
})
