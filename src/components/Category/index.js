import Vue from 'vue'
import Data from '../../data'

export default Vue.extend({
  name: 'Category',
  template: require('./template.html'),

  ready () {
    let key = this.$route.params.category
    this.data = Data[key]
    this.data.drones.forEach((value, index) => {
      let current = this.data.drones[index]
      let imageUrl = `/static/img/categories/${this.$route.params.category}/${current.name.toLowerCase().replace(' ', '-')}.png`
      current.image = imageUrl
    })
  },

  data () {
    return {
      coverUrl: '/static/img/categories/' + this.$route.params.category + '/drone.png',
      data: this.data
    }
  }
})
