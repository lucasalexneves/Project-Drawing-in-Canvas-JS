// Initial Data
let currentColor = 'black'
let canDraw = false
let mouseX = 0
let mouseY = 0

let screen = document.querySelector('#tela')
let ctx = screen.getContext('2d')

// Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent)
})
screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
screen.addEventListener('mouseup', mouseUpEvent)


/*
Step by step to draw on canvas:
- When mouse click DOWN, activate drawing mode.
- When the mouse MOVES, if drawing mode is on, draw.
- When mouse click RAISE, deactivate drawing mode.
*/

// Functions
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}

function mouseDownEvent(){
    canDraw = true
    mouseX = e.pageX - screen.offsetLeft
    mouseY = e.pageY - screen.offsetTop
}

function mouseMoveEvent(e){
    if(canDraw){
       Draw(e.pageX, e.pageY)
    }
}

function mouseUpEvent(){
    canDraw = false
}

function Draw(x, y){
    let pointX = x - screen.offsetLeft
    let pointY = y - screenTop

    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.lineJoin = "round"
    ctx.moveTo(mouseX, mouseY)
    ctx.lineTo(pointX, pointY)
    ctx.closePath()
    ctx.strokeStyle = currentColor
    ctx.stroke()

    mouseX = pointX
    mouseY = pointY
}