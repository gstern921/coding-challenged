const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const nums = data.split('\n').map(Number);

const PREAMBLE_SIZE = 25;

for (let i = PREAMBLE_SIZE; i < nums.length; i++) {
  const sumToFind = nums[i];
  const validRange = nums.slice(i - PREAMBLE_SIZE, i);
  const isSumFound = hasSumOfTwoNumbersEqualTo(sumToFind, validRange);

  if (!isSumFound) {
    console.log('No sum found for ', sumToFind);
    return sumToFind;
  }
}

function hasSumOfTwoNumbersEqualTo(sumToFind, arr = nums) {
  // We only iterate to arr.length - 2
  // because we are looking one index ahead
  for (let i = 0; i < arr.length - 1; i++) {
    const value = arr[i];
    const diff = sumToFind - value;
    if (arr.indexOf(diff, i + 1) > -1) {
      return true;
    }
  }
  return false;
}
