const ship = require("./ship");

describe("set up ship", () => {
  const testship = ship(4);

  test("test ships length", () => {
    expect(testship.getLength()).toBe(4);
  });

  test("test ship hit", () => {
    testship.hit(2);
    testship.hit(4);
    expect(testship.getHits()).toContain(2, 4);
  });

  test("test if ship can be hit higher than allowed", () => {
    testship.hit(5);
    expect(testship.getHits()).not.toContain(5);
  });

  test("test if ship can be hit smaller than allowed", () => {
    testship.hit(0);
    testship.hit(-1);
    expect(testship.getHits()).not.toContain(0, -1);
  });

  test("test if ship is sunk", () => {
    testship.hit(1);
    testship.hit(3);
    expect(testship.isSunk()).toBe(true);
  });
});
