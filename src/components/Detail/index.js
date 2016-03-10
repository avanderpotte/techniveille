import Vue from 'vue'

export default Vue.extend({
  name: 'Detail',
  template: require('./template.html'),

  ready () {
    let key = this.$route.params.id
    console.log(key)
    console.log(this.$parent._context.data)
  },

  data () {
    return {
      text: 'Nested view'
    }
  }
})
