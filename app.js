// state
let initialState;

function buildInitialState() {}

// render
function renderState() {}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState(); // show the user the new state
}
const board = document.getElementById("board");
board.addEventListener("click", onBoardClick); // etc

const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move: function (letter, rowNum, columnNum) {
    if (this.board[rowNum][columnNum] === null) {
      this.board[rowNum][columnNum] = letter;
    }

    return this.board;
  },

  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    return this.board;
  },
};
