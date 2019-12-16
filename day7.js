/* PART 1 */

const fs = require('fs');
const RAW_INPUT = fs.readFileSync('day7_input.txt', 'utf-8').trim();
const program = RAW_INPUT.split(',').map(Number);

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



const allPermutations = inputArray => {
  // Each collection of permutations of each increasingly larger subset
  // (starting with the set containing only the first element in the input set)
  // is generated using each permutation of the previous subset
  let currentSubsetPerms = [[inputArray[0]]];

  for (let i = 1; i < inputArray.length; i+= 1) {
    let previousSubsetPerms = [...currentSubsetPerms];
    currentSubsetPerms = [];
    // To get next collection of permutations, add next input-array value
    // to beginning of each permutation of previous subset, then shift it along
    // the array from left to right
    previousSubsetPerms.forEach(v => {
      let newPerm = [inputArray[i], ...v];
      currentSubsetPerms.push(newPerm);

      for (let i = 0; i < v.length; i += 1) {
        newPerm = [...newPerm];
        // Swap elements [i] and [i+1]
        [newPerm[i], newPerm[i + 1]] = [newPerm[i + 1], newPerm[i]];
        currentSubsetPerms.push(newPerm);
      }
    });
  };

  return currentSubsetPerms;
}


const test1 = '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0'.split(',').map(Number);
const test2 = '3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0'.split(',').map(Number);
const test3 = '3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0'.split(',').map(Number);

const allFinalOutputs = [];

allPermutations([0,1,2,3,4]).forEach(phaseSettingPerm => {
  let finalOutput = firstInput;

  phaseSettingPerm.forEach(v => {
    finalOutput = amplifier(test3, v, finalOutput);
  });

  console.log({phaseSettingPerm, finalOutput});
  allFinalOutputs.push({phaseSettingPerm, finalOutput});
});



console.log(allFinalOutputs);
console.log(Math.max(...allFinalOutputs));
