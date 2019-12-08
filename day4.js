/* PART 1 */

const notDecreasingTest = arr => arr.concat().sort((a,b) => a - b).toString() === arr.toString();

const repeatingDigitTest = arr => {
  let hasRepeatingPair = false;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] === arr[i + 1]) {
      hasRepeatingPair = true;
      break;
    }
  }
  return hasRepeatingPair;
}

const validPasswords = [];
for (let i = 145852; i < 616942; i += 1) {
  const arr = i.toString().split('');
  if (notDecreasingTest(arr) && repeatingDigitTest(arr)) {
    validPasswords.push(i);
  }
}

console.log(validPasswords.length);



/* PART 2 */

const digitPairTest = arr => {
  let hasDigitPair = false;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] === arr[i + 1] && arr[i] !== arr[i + 2] && arr[i] !== arr[i - 1]) {
      hasDigitPair = true;
      break;
    }
  }
  return hasDigitPair;
}

const validPasswords2 = [];
for (let i = 145852; i < 616942; i += 1) {
  const arr = i.toString().split('');
  if (notDecreasingTest(arr) && digitPairTest(arr)) {
    validPasswords2.push(i);
  }
}

console.log(validPasswords2.length);
