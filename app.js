const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  activePlayer: 0,
  endingMessage: ["Congratulations!", "Draw"]
};

// switch from player to player
function changeTurn() {
  if (gameState.activePlayer === 0) {
    gameState.activePlayer = 1;
  } else {
    gameState.activePlayer = 0;
  }
}

// saves the play in memory
function updateGameState(event) {
  if (!event.target.innerHTML) {
    event.target.innerHTML = gameState.players[gameState.activePlayer]
    changeTurn()
  }
}

// let x1 = [
//   ["x", "o", "x"],
//   ["x", "o", "o"],
//   ["o", "x", "x"],
// ] 

function getRow(board, rowIndex) {
  let rowString = "";
  let row = board[rowIndex];
  for (i = 0; i < row.length; i++) {
    rowString += row[i];
  }
  return rowString;
}
// console.log(getRow(x1, 0));

function getColumn(board, columnIndex) {
  let columnArray = [];
  for (let i = 0; i < board.length; i++) {
    let column = board[i][columnIndex];
    columnArray += column;
    }
  return columnArray;
}
// console.log(getColumn(x1, 0))

function getDiagonalLeft(board) {
  let DiagonalLeftArray = []
  DiagonalLeftArray += board[0][0] + board[1][1] + board[2][2]
  return DiagonalLeftArray
}
// console.log(getDiagonalLeft(x1))

function getDiagonalRight(board) {
  let DiagonalRightArray = []
  DiagonalRightArray += board[0][2] + board[1][1] + board[2][0]
  return DiagonalRightArray
}
// console.log(getDiagonalRight(x1))

function includesThree(array) {
  let returnVal = true;
  if (array === "xxx") {}
  else if (array === "ooo") {}
  else {
    return false
  }
  return returnVal;
}
// console.log(includesThree(getRow(x1, 0)))

function checkForWin(board) {
  let returnVal = true;
  for (let i = 0; i < board.length; i++) {
    let rowIndex = i;
    if (includesThree(getRow(board, rowIndex)) === true) {
      return returnVal
    }
  }
  for (let i = 0; i < board.length; i++) {
    let columnIndex = i;
    if (includesThree(getColumn(board, columnIndex)) === true) {
      return returnVal
    }
  }
  if (includesThree(getDiagonalLeft(board)) === true) {
    return returnVal
  }
  else if (includesThree(getDiagonalRight(board)) === true) {
    return returnVal
  }
  else {
    return false;
  }
}
// console.log(checkForWin(x1))

function congratulations(event) {
  if (checkForWin(gameState.board) === true) {
    event.target.innerHTML = gameState.endingMessage[0]
  }
}

function draw(event) {}

function emptyBoardandPlayers() {}

function boardClick(event) {
  updateGameState(event)
  let win = checkForWin(gameState.board)
  if (win) {
    congratulations()
  }
  // else {
    // change activePlayer
    // changeTurn()
  // }
}

const gameArea = document.getElementById("board");
gameArea.addEventListener("click", boardClick); 
// const ending = document.getElementById("endingMessage");
// ending.addEventListener("show", congratulations)