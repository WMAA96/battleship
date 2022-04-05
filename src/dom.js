const displayBoard = (playersboard, computersboard) => {
  let currentBoard = document.getElementById("gameboard1");
  let board = playersboard.getBoard();
  console.log(board);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let square2 = document.createElement("div");
      square2.textContent = board[i][j];
      square2.dataset.x = [j];
      square2.dataset.y = [i];
      currentBoard.appendChild(square2).className = "square";
    }
  }
  currentBoard = document.getElementById("gameboard2");
  board = computersboard.getBoard();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let square2 = document.createElement("div");
      square2.textContent = board[i][j];
      square2.dataset.x = [j];
      square2.dataset.y = [i];
      currentBoard.appendChild(square2).className = "square";
    }
  }
};

const aaa = () => {
  console.log("gfddgfgdf");
};

module.exports = {
  displayBoard,
  aaa,
};
