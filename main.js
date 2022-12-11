import Canvas from './Canvas.js'
import Circle from './Circle.js'
import Line from './Line.js'
import registerListeners from './registerListeners.js'

const { canvas, ctx } = new Canvas({ background: '#232332' })
const circles = new Circle(ctx, 1)
const lines = new Line(ctx)

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  circles.draw()
  lines.draw(circles.coords)
  requestAnimationFrame(loop)
}

loop()
registerListeners(canvas, circles)
