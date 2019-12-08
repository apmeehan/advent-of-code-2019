/* PART 1 */

const fs = require('fs');
const input = fs.readFileSync('day03_input.txt', 'utf-8').trim();
const [path1, path2] = input.split('\n').map(v => v.split(','));


const wireCoords = path => {
  let [x, y] = [0, 0];
	const coords = ['0,0'];

  path.forEach(v => {
    const direction = v[0];
    const distance = v.slice(1);

    for (let i = 0; i < distance; i += 1) {
      if (direction === 'U') y += 1;
      if (direction === 'D') y -= 1;
      if (direction === 'L') x -= 1;
      if (direction === 'R') x += 1;
      coords.push(`${x},${y}`);
    };
  });

  return coords;
}

const wire1Coords = wireCoords(path1);
const wire2Coords = wireCoords(path2);

const coordSet1 = new Set(wire1Coords);
const coordSet2 = new Set(wire2Coords);
const intersections = [...coordSet1].filter(v => coordSet2.has(v));

console.log({ intersections });



/* PART 2 */

const wireLengths = intersections.map(v => wire1Coords.indexOf(v) + wire2Coords.indexOf(v));

console.log({ wireLengths });
