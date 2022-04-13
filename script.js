let cells = document.querySelectorAll('.cell') //returns 1st elem that matches css selector
cell = Array.from(cells)
console.log(cells)

let currentPlayer = 'X'
let gameActive = true
let winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

document.getElementById("reset-btn").addEventListener("click", resetHandler)
function resetHandler() {
    location.reload()
}

function checkForWinner() {
    winningCombination.forEach(function (combination) {
        let check = combination.every(index => cells[index].innerText == currentPlayer)
        if (check) {
            document.getElementsByClassName('winner-message')[0].innerText = currentPlayer + ' has won!'
            gameActive = false
        }
    })
}

let count = 0;
function matchDraw() {
    if (count === 9) {
        document.getElementsByClassName('winner-message')[0].innerText = "It's a tie!"
    }
}

cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.innerText != '' || !gameActive) return
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        count++
        matchDraw()

    })
})