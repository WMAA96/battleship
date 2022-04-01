const gameboard = require("./gameboard");
const ship = require("./ship");
const player = require("./player");

describe("set up board", () => {
  let testBoard = gameboard();
  let testship = ship(4);
  let player1 = player("player1");

  beforeEach(() => {
    testBoard = gameboard();
    testship = ship(4);
    player1 = player("player1");
    testBoard.init();
    testBoard.placeShip(testship, 3, 4);
  });

  test("player can sink ship", () => {
    player1.attack(3, 4, testBoard);
    player1.attack(3, 5, testBoard);
    player1.attack(3, 6, testBoard);
    player1.attack(3, 7, testBoard);

    expect(testBoard.shipsSunk()).toBe(true);
  });

  test("random attack is legal", () => {
    for (let i = 0; i < 100; i++) {
      player1.randomAttack(testBoard);
    }

    expect(testBoard.shipsSunk()).toBe(true);
  });
});
