const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  activePlayer: 0,
};

function changeTurn() {
  if (gameState.activePlayer === 0) {
    gameState.activePlayer = 1;
  } else {
    gameState.activePlayer = 0;
  }
}

// function clearBoard(board) {
//   for (let i = 0; i < board.length; i ++) {
//     board[i][0] = null;
//     board[i][1] = null;
//     board[i][2] = null;
//   }
// }

function updateGameState(event) {
  if (!event.target.innerHTML) {
    event.target.innerHTML = gameState.players[gameState.activePlayer];
    changeTurn();
  }
}

function getRow(board, rowIndex) {
  let rowString = "";
  let row = board[rowIndex];
  for (i = 0; i < row.length; i++) {
    rowString += row[i];
  }
  return rowString;
}

function getColumn(board, columnIndex) {
  let columnString = "";
  for (let i = 0; i < board.length; i++) {
    let column = board[i][columnIndex];
    columnString += column;
    }
  return columnString;
}

function getDiagonalLeft(board) {
  let DiagonalLeftString = "";
  DiagonalLeftString += board[0][0] + board[1][1] + board[2][2];
  return DiagonalLeftString;
}

function getDiagonalRight(board) {
  let DiagonalRightString = "";
  DiagonalRightString += board[0][2] + board[1][1] + board[2][0];
  return DiagonalRightString;
}

function includesThree(str) {
  if (str === "xxx") {}
  else if (str === "ooo") {}
  else {
    return false;
  }
  return true;
}

function checkForWin(board) {
  for (let i = 0; i < board.length; i++) {
    let rowIndex = i;
    if (includesThree(getRow(board, rowIndex)) === true) {
      return true;
    }
  }
  for (let i = 0; i < board.length; i++) {
    let columnIndex = i;
    if (includesThree(getColumn(board, columnIndex)) === true) {
      return true;
    }
  }
  if (includesThree(getDiagonalLeft(board)) === true) {
    return true;
  }
  else if (includesThree(getDiagonalRight(board)) === true) {
    return true;
  }
  else {
    return false;
  }
}

function congratulationsMessage() {
    document.getElementById("endingMessage").innerHTML = "Congratulations!";
}

function anyNullsLeft(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === null) {
      return false;
    }
    if (board[i][1] === null) {
      return false;
    }
    if (board[i][2] === null) {
      return false;
    }
  }
  return true;
}

function drawMessage() {
  document.getElementById("endingMessage").innerHTML = "Draw";
}

function boardClick(event) {
  let rowIndex = event.target.closest("tr").rowIndex;
  let cellIndex = event.target.closest("td").cellIndex;
  gameState.board[rowIndex][cellIndex] = gameState.players[gameState.activePlayer];
  updateGameState(event);
  if (checkForWin(gameState.board)) {
    congratulationsMessage();
  }
  else if(anyNullsLeft(gameState.board)) {
    drawMessage();
  }
}

const cells = document.querySelectorAll('td');
for (let i = 0; i < cells.length; i++) {
  let cell = cells[i];
  cell.addEventListener("click", boardClick);
}