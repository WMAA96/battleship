const ship = require("./ship");

const gameboard = () => {
  board = [];
  missedShots = [];
  shipsContainer = [];

  const getMissedShots = () => missedShots;

  const getBoard = () => board;

  const shipsSunk = () => {
    for (let i = 0; i < shipsContainer.length; i++) {
      if (shipsContainer[i].isSunk() === false) {
        return false;
      }
    }
    return true;
  };

  const init = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = null;
      }
    }
  };

  const placeShip = (ship, x, y) => {
    for (let i = 0; i < ship.getLength(); i++) {
      board[x][y + i] = ship;
    }
    shipsContainer.push(ship);
  };

  const recieveAttack = (x, y) => {
    if (board[x][y] === null) {
      missedShots.push([x, y]);
      // add to missed shots
    } else {
      // checks the index of the ship
      let something = true;
      let n = 0;
      while (something) {
        if (board[x][y - n] === null) {
          something = false;
          board[x][y].hit(n);
        } else {
          n++;
        }
      }
    }
  };

  return {
    getBoard,
    init,
    placeShip,
    recieveAttack,
    getMissedShots,
    shipsSunk,
  };
};

//Create a 10x10 gameboard
module.exports = gameboard;
