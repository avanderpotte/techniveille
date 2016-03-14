class Animate {
  constructor () {
    this.testNodes()
  }
  testNodes () {
    if (document.querySelectorAll('.article').length === 6) {
      this.elements = document.querySelectorAll('.article')
      this.listenScroll()
    } else {
      setTimeout(() => {
        this.testNodes()
      }, 100)
    }
  }
  listenScroll () {
    window.addEventListener('scroll', () => {
      let windowHeight = window.innerHeight
      let windowTop = window.pageYOffset
      let windowBottom = windowHeight + windowTop
      for (let elem of this.elements) {
        let elemTop = elem.offsetTop
        if (((1.2 * elemTop) <= windowBottom)) {
          elem.classList.add('animate')
        }
      }
    })
  }
}

export default Animate
