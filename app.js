const squares = document.querySelectorAll('.sq')
const mole = document.querySelector('.mole')
const time = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPos
let timerId = null
let curTime = 60

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
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
        }
    })
})

function moveTheMole() {
    timerId = setInterval(randomSquare, 600)
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