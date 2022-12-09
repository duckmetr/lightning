class Canvas {
  constructor(width, height, background) {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = width ?? innerWidth
    this.canvas.height = height ?? innerHeight
    this.canvas.style.background = background ?? '#232332'

    document.body.appendChild(this.canvas)
  }
}

export default Canvas
