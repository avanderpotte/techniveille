import Vue from 'vue'
import Data from '../../data'
import Animate from './animate'

export default Vue.component('modal', {
  template: require('./popup-template.html'),
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  }
})

export default Vue.extend({
  name: 'Category',
  template: require('./template.html'),

  /* eslint-disable no-new */
  ready () {
    new Animate()
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
      data: this.data,
      modalData: {},
      showModal: false
    }
  },

  methods: {
    launchModal (index) {
      this.modalData = this.data.drones[index]
      this.showModal = true
    }
  }
})
