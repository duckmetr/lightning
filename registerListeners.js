export default function (canvas, circles) {
  canvas.addEventListener('click', (event) => {
    event.preventDefault()
    circles.add(event.clientX, event.clientY)
  })

  canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    circles.remove()
  })

  canvas.addEventListener('mousemove', (event) => {
    let mx = event.x - canvas.getBoundingClientRect().x
    let my = event.y - canvas.getBoundingClientRect().y
    circles.move(mx, my)
  })
}
