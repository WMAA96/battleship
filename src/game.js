const ship = require("./ship");
import gameboard from "./gameboard";
const player = require("./player");
const dom = require("./dom");

const game = () => {
  let player1 = player("Player1");
  let computer = player("Computer");

  let playersboard = gameboard();
  playersboard.init();

  let computersboard = gameboard();
  computersboard.init();

  let ship1 = ship(2);
  let ship2 = ship(5);

  playersboard.placeShip(ship1, 1, 1);
  computersboard.placeShip(ship2, 3, 3);

  dom.displayBoard(playersboard, computersboard);
};

game();
