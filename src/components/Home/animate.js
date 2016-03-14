class Animate {
  constructor () {
    this.elements = document.querySelectorAll('.category')
    this.listenScroll()
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
