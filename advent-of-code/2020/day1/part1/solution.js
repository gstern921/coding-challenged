const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

if (!data) {
  throw new Error('No Data Found!')
}

const goal = 2020;
data = data.trim().split('\n').map(Number);

const result = findTwoDigitSumProduct(goal, data);

function findTwoDigitSumProduct(goal, nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    const val = nums[i];
    const diff = goal - val;
    const indexOfDiff = nums.indexOf(diff);
    if (indexOfDiff >= 0) {
      return val * nums[indexOfDiff];
    }
  }
  return null;
}
