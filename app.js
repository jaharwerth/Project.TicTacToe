const gameState = {
  players: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  activePlayer: 0
};

const gameArea = document.getElementById("board");
gameArea.addEventListener("click", boardClick);

function boardClick(event) {
//   updateBoard();
//   displayBoard();
//   let win = checkForWin();
//   if (win) {
//     updateWin();
//   } else {
//     changeTurn();
//   }
}

// save the play in memory
function updateBoard(event) {}

// use memory to update user facing display (html)
function displayBoard(event) {
  event.target.innerText = "o";
}

// see if any win condition is fulfilled, similar to sudoku in checking the output of rows, columns, and diagonals
function checkForWin() {
  includesThree();
}

// helps checkForWin, looks for three in a row
function includesThree() {

}

function updateWin() {

}

//switch from player to player
function changeTurn() {
  if (activePlayer === 1) {
    gameState.activePlayer = 0;
  } else {
    gameState.activePlayer = 1;
  }
}
