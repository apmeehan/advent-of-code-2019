/* PART 1 */

const fs = require('fs');
const input = fs.readFileSync('day5_input.txt', 'utf-8').trim();
let program = input.split(',').map(Number);

let inputValue = 1;

let i = 0;
while (i < program.length) {
  const integer = program[i];
  const opcode = +integer.toString().slice(-2);
  const paramModes = integer.toString().slice(0, -2).split('').reverse().map(Number);

  if (opcode === 99) break;
  else if (opcode == 3) {
    program[program[i + 1]] = inputValue;
    i += 2;
  }
  else if (opcode === 4) {
    console.log(program[program[i + 1]]);
    i += 2;
  }
  else {
    const paramValue1 = paramModes[0] === 1 ? program[i + 1] : program[program[i + 1]];
    const paramValue2 = paramModes[1] === 1 ? program[i + 2] : program[program[i + 2]];

    if (opcode === 1) program[program[i + 3]] = paramValue1 + paramValue2;
    if (opcode === 2) program[program[i + 3]] = paramValue1 * paramValue2;

    i += 4;
  }
}



/* PART 2 */

program = input.split(',').map(Number);
inputValue = 5;

i = 0;
while (i < program.length) {
  const integer = program[i];
  const opcode = +integer.toString().slice(-2);
  const paramModes = integer.toString().slice(0, -2).split('').reverse().map(Number);

  const paramValue1 = paramModes[0] === 1 ? program[i + 1] : program[program[i + 1]];
  const paramValue2 = paramModes[1] === 1 ? program[i + 2] : program[program[i + 2]];

  if (opcode === 99) break;
  if (opcode === 1) {
    program[program[i + 3]] = paramValue1 + paramValue2;
    i += 4;
  }
  if (opcode === 2) {
    program[program[i + 3]] = paramValue1 * paramValue2;
    i += 4;
  }
  if (opcode === 3) {
    program[program[i + 1]] = inputValue;
    i += 2;
  }
  if (opcode === 4) {
    console.log(program[program[i + 1]]);
    i += 2;
  }
  if (opcode === 5) {
    if (paramValue1 === 0) i += 3;
    else i = paramValue2;
  }
  if (opcode === 6) {
    if (paramValue1 !== 0) i += 3;
    else i = paramValue2;
  }
  if (opcode === 7) {
    program[program[i + 3]] = paramValue1 < paramValue2 ? 1 : 0;
    i += 4;
  }
  if (opcode === 8) {
    program[program[i + 3]] = paramValue1 === paramValue2 ? 1 : 0;
    i += 4;
  }
}
