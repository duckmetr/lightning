class Line {
  maxLength = 400
  maxOffset = 6
  stepLength = 2

  constructor(ctx) {
    this.ctx = ctx
  }

  #getDistance(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
  }

  draw(coords) {
    for (let a = 0; a < coords.length; a++) {
      for (let b = a + 1; b < coords.length; b++) {
        const dist = this.#getDistance(coords[a], coords[b])

        if (dist / this.maxLength > Math.random()) continue

        let stepsCount = dist / this.stepLength
        let sx = coords[a].x
        let sy = coords[a].y

        this.ctx.lineWidth = 2.5
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(coords[a].x, coords[a].y)

        for (let j = stepsCount; j > 1; j--) {
          let pathLength = this.#getDistance(coords[a], { x: sx, y: sy })
          let offset = Math.sin((pathLength / dist) * Math.PI) * this.maxOffset

          sx += (coords[b].x - sx) / j + Math.random() * offset * 2 - offset
          sy += (coords[b].y - sy) / j + Math.random() * offset * 2 - offset
          this.ctx.lineTo(sx, sy)
        }

        this.ctx.stroke()
      }
    }
  }
}

export default Line
