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
           document.getElementById("container").innerHTML = currentPlayer + ' has won!'
        }

    })
}

cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.innerText != '') return
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    })
})