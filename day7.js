/* PART 1 */

const fs = require('fs');
const RAW_INPUT = fs.readFileSync('day5_input.txt', 'utf-8').trim();
let program = RAW_INPUT.split(',').map(Number);
program = "3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0".split(',').map(Number);


const firstInput = 0;

const amplifier = (program, phaseSetting, input) => {
  let output;
  let hasPhaseSettingBeenRead = false;
  let i = 0;
  while (i < program.length) {
    const integer = program[i];
    const opcode = +integer.toString().slice(-2);
    const paramModes = integer.toString().slice(0, -2).split('').reverse().map(Number);

    if (opcode === 99) break;
    else if (opcode == 3) {
      program[program[i + 1]] = hasPhaseSettingBeenRead ? input : phaseSetting;
      hasPhaseSettingBeenRead = true;
      i += 2;
    }
    else if (opcode === 4) {
      output = program[program[i + 1]];
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
  return output;
};



  let result = [];

  const permute = (arr) => {
    const m = [];
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute([0,1,2,3])



let lastOutput = firstInput;
const phaseSettings = [4,3,2,1,0];

phaseSettings.forEach(v => {
  lastOutput = amplifier(program, v, lastOutput);
});

console.log(lastOutput);
