/* PART 1 */

const fs = require('fs');
const input = fs.readFileSync('day02_input.txt', 'utf-8').trim();
const arr = input.split(',').map(Number);

arr[1] = 12;
arr[2] = 2;

for (let i = 0; i < arr.length; i += 4) {
	const v = arr[i];
	if (v == 99) break;
	if (v == 1) arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
	if (v == 2) arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
}
console.log(arr[0]);



/* PART 2 */

const program = (noun, verb) => {
	const arr = input.split(',').map(Number);
	arr[1] = noun;
	arr[2] = verb;

	for (let i = 0; i < arr.length; i += 4) {
		const v = arr[i];
		if (v == 99) break;
		if (v == 1) arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
		if (v == 2) arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
	}
	return arr[0];
}

let programOutput;
for (let i = 0; i < arr.length; i += 1) {
	for (let j = 0; j < arr.length; j += 1) {
		programOutput = program(i, j);
		if (programOutput === 19690720) {
			console.log({i, j});
			break;
		}
	}
}
