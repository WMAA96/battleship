const gameboard = require("./gameboard");
const ship = require("./ship");

describe("set up board", () => {
  const testBoard = gameboard();
  const testship = ship(4);
  testBoard.init();

  test("sdfsdf", () => {
    expect(243432432);
  });

  test("place ship on board", () => {
    testBoard.placeShip(testship, 3, 4);

    expect(board[3][4]).toBe(testship);
    expect(board[3][5]).toBe(testship);
    expect(board[3][6]).toBe(testship);
    expect(board[3][7]).toBe(testship);
  });

  test("attack hit ship", () => {
    testBoard.recieveAttack(3, 4);
    testBoard.recieveAttack(3, 5);
    testBoard.recieveAttack(3, 6);
    testBoard.recieveAttack(3, 7);
    testBoard.recieveAttack(3, 3);

    expect(board[3][4].getHits()).toEqual([1, 2, 3, 4]);
  });

  test("missed shots are recorded", () => {
    testBoard.recieveAttack(1, 2);

    expect(testBoard.getMissedShots()).toEqual([
      [3, 3],
      [1, 2],
    ]);
  });

  test("all ships are sunk", () => {
    expect(testBoard.shipsSunk()).toBe(true);
  });
});
