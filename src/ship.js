const ship = length => {
  const hits = [];

  const getHits = () => hits;

  const getLength = () => length;

  const hit = position => {
    if (!hits.includes(position) && position <= length && position > 0) {
      hits.push(position);
    }
  };

  const isSunk = () => {
    return hits.length === length;
  };

  return { getLength, getHits, hit, isSunk };
};

module.exports = ship;
