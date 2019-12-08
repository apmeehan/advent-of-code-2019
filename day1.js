const fs = require('fs');
const input = fs.readFileSync('day01_input.txt', 'utf-8').trim();
const moduleMasses = input.split('\n').map(Number);

const moduleFuelAmounts = moduleMasses.map(v => {
  const moduleFuelArray = [];
  let moduleFuel = v;

  while (moduleFuel >= 9) {
    moduleFuel = Math.floor(moduleFuel / 3) - 2;
  	moduleFuelArray.push(moduleFuel);
  }

  return moduleFuelArray;
});

const moduleTotalFuelAmounts = moduleFuelAmounts.map(v => v.reduce((acc, curr) => acc + curr));
const totalFuelAmount = moduleTotalFuelAmounts.reduce((acc, curr) => acc + curr);

console.log(totalFuelAmount);
