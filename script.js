// Initial Data
let currentColor = 'black'

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

}

function mouseMoveEvent(){

}

function mouseUpEvent(){
    
}