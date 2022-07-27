const squares = document.querySelectorAll('.sq')
const mole = document.querySelector('.mole')
const time = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPos
let timerId = null
let curTime = 61

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
        square.classList.remove('boom')
        square.classList.remove('miss')
    })

    let randomSq = squares[Math.floor(Math.random() * 9)]
    randomSq.classList.add('mole')
    hitPos = randomSq.id
}

squares.forEach(square => {
    square.addEventListener('mousedown',(event) => {
        if (square.id == hitPos) {
            result++
            score.innerHTML = result
            hitPos = null
            square.classList.add('boom')
        } else {
            square.classList.add('miss')
        }
    })
})

function moveTheMole() {
    timerId = setInterval(randomSquare, 700)
}
moveTheMole()


function countDown() {
    curTime--;
    time.innerHTML = curTime

    if (curTime == 0) {
        clearInterval(countDownId)
        clearInterval(timerId)
        alert('Game Over! Your score is ' + result)
    }
}
let countDownId = setInterval(countDown, 1000)