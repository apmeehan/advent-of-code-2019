/* PART 1 */

const fs = require('fs');
const input = fs.readFileSync('day6_input.txt', 'utf-8').trim();
const orbitsArray = input.split('\n').map(v => v.split(')'));

const orbitsObj = {};
orbitsArray.forEach(v => orbitsObj[v[1]] = v[0]);

let sumOfOrbitCounts = 0;

Object.keys(orbitsObj).forEach(v => {
  let position = v;
  let orbitCount = 0;

  while (position !== "COM") {
    position = orbitsObj[position];
    orbitCount += 1;
  }
  sumOfOrbitCounts += orbitCount;
});

console.log(sumOfOrbitCounts);



/* PART 2 */

// Calculate path from body YOU are orbiting, to COM
let pathYOU = [];
let orbitCountYOU = 0;
let position = orbitsObj['YOU'];
while (position !== "COM") {
  position = orbitsObj[position];
  pathYOU.push(position);
  orbitCountYOU += 1;
};

// Calculate path from body SAN is orbiting, to COM
let pathSAN = [];
let orbitCountSAN = 0;
position = orbitsObj['SAN'];
while (position !== "COM") {
  position = orbitsObj[position];
  pathSAN.push(position);
  orbitCountSAN += 1;
};

// Find the point at which these paths join, when tracing both back to COM
pathYOU.reverse();
pathSAN.reverse();
const intersection = pathYOU.filter((v, i) => v === pathSAN[i]).slice(-1)[0];

// Find the number of transfers from here to COM, and subtract twice
let orbitCountIntersection = 0;
position = intersection;
while (position !== "COM") {
  position = orbitsObj[position];
  orbitCountIntersection += 1;
};

console.log(orbitCountYOU + orbitCountSAN - (orbitCountIntersection * 2));
