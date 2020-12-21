const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const nums = data.split('\n').map(Number);

nums.sort((a, b) => a - b);

const joltageDiffs = {
  1: 0,
  2: 0,
  3: 0,
}

const outletJoltage = 0;
const deviceJoltageDiff = 3;

joltageDiffs[nums[0] - outletJoltage]++;
// We stop 1 index short of the end of array
// because we will be looking 1 index ahead
for (let i = 0; i < nums.length - 1; i++) {
  const diff = nums[i + 1] - nums[i];
  joltageDiffs[diff] = joltageDiffs[diff] || 0;
  joltageDiffs[diff]++;
}

joltageDiffs[deviceJoltageDiff]++;

console.log(joltageDiffs[1] * joltageDiffs[3]);

