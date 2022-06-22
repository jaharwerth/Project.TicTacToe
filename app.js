const gameArea = document.getElementById("board");

const gameState = {
    players: ["X", "O"],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    activePlayer: 0,
  }

gameArea.addEventListener("click", boardClick(clickEvent));

function boardClick(clickEvent) {
    updateBoard()
    displayBoard()
    let win = checkForWin()
    if (win) {
        updateWin()
    }
    else {
        changeTurn()
    }
}

// save the play in memory
function updateBoard(clickEvent) {
    let newBoard = []
    if (this.board)


    return newBoard
}

// use memory to update user facing display (html)
function displayBoard(clickEvent) {}

// see if any win condition is fulfilled, similar to sudoku in checking the output of rows, columns, and diagonals
function checkForWin() {
    includesThree()
}

// helps checkForWin, looks for three in a row
function includesThree() {}

function updateWin() {}

// 
function changeTurn() {
    if (activePlayer === 1) {
        gameState.activePlayer = 0;
    }
    else {
        gameState.activePlayer = 1;
    }
}
