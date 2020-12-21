const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const nums = data.split("\n").map(Number);

let highest = 0;
for (let i = 0; i < nums.length; i++) {
  nums[i] = parseInt(nums[i]);
  if (nums[i] > highest) {
    highest = nums[i];
  }
}
nums.push(highest + 3);

const cache = {};

function findCombinations(currentEnd, availableAdapters, shouldLog = true) {
  if (currentEnd == highest) {
    return 1;
  }
  let combinationCount = 0;
  for (let i = 1; i <= 3; i++) {
    if (availableAdapters.includes(currentEnd + i)) {
      const remaining = availableAdapters.filter(
        (value) => value > currentEnd + i
      );
      if (cache[currentEnd + i] == null) {
        cache[currentEnd + i] = findCombinations(
          currentEnd + i,
          remaining,
          false
        );
      }
      combinationCount += cache[currentEnd + i];
    }
  }
  return combinationCount;
}

const result = findCombinations(0, nums);
console.log(result);
