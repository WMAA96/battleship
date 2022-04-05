const gameboard = require("./gameboard");

const player = name => {
  this.name = name;
  alreadyHit = [];

  const getPlayer = () => name;

  const attack = (x, y, gameboard) => {
    gameboard.recieveAttack(x, y);
  };

  const randomAttack = gameboard => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    while (validAttack(x, y)) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    alreadyHit.push([x, y]);

    gameboard.recieveAttack(x, y);
  };

  const validAttack = (x, y) => {
    for (let i = 0; i < alreadyHit.length; i++) {
      if (alreadyHit[i][0] === x && alreadyHit[i][1] === y) {
        return true;
      }
    }
    return false;
  };

  return { attack, randomAttack, getPlayer };
};

module.exports = player;
