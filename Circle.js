class Circle {
  #TWO_PI = Math.PI * 2

  constructor(ctx, count) {
    this.ctx = ctx
    this.coords = []

    count && this.add(null, null, count)
  }

  add(x, y, count = 1) {
    const coords = [...new Array(count)].map(() => {
      return x && y
        ? { x, y }
        : { x: Math.random() * this.ctx.canvas.width, y: Math.random() * this.ctx.canvas.height }
    })

    this.coords.push(...coords)
  }

  remove() {
    this.coords.length > 1 && this.coords.pop()
  }

  move(x, y) {
    this.coords.length > 0 && (this.coords[this.coords.length - 1] = { x, y })
  }

  draw() {
    this.ctx.lineWidth = 1.5
    this.ctx.fillStyle = 'white'
    this.ctx.strokeStyle = 'red'

    this.coords.forEach(({ x, y }) => {
      this.ctx.beginPath()
      this.ctx.arc(x, y, 6, 0, this.#TWO_PI)
      this.ctx.closePath()
      this.ctx.fill()

      this.ctx.beginPath()
      this.ctx.arc(x, y, 32, 0, this.#TWO_PI)
      this.ctx.closePath()
      this.ctx.stroke()
    })
  }
}

export default Circle
