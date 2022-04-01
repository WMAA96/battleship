const ship = require("./ship");
const gameboard = require("./gameboard");
const player = require("./player");
const dom = require("./dom");

const game = () => {
  console.log("yup");
  const player1 = player("player1");
  const computer = player("computer");

  const playerboard = gameboard();
  const computerboard = gameboard();

  const ship1 = ship();
  const ship2 = ship();

  playerboard.placeShip(ship1, 1, 1);
  computerboard.placeShip(ship2, 2, 2);

  dom.displayBoard();
};

game();
