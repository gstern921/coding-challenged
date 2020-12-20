const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

if (!data) {
  throw new Error('No Data Found!')
}

const goal = 2020;
data = data.trim().split('\n').map(Number).sort((a, b) => a - b);
// console.log(data);

const result = findThreeDigitSumProduct(goal, data);


function findThreeDigitSumProduct(goal, sortedNums) {

  let i = 0;
  let j = sortedNums.length - 1;
  let sum = 0;


  while (i < j) {
    sum = sortedNums[i] + sortedNums[j];

    let diff = goal - sum;

    if (sum >= goal) {
      j--;
      i = 0;
      continue;
    }
    let index = binarySearch(sortedNums, diff, 0, sortedNums.length - 1);
    if (index >= 0 && index !== i && index !== j) {
      return sortedNums[i] * sortedNums[j] * sortedNums[index];
    }

    i++;
  }

  return null;
}

function binarySearch(sortedArr, goal, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return -1;
  }
  if (sortedArr[startIndex] === goal) {
    return startIndex;
  }
  if (sortedArr[endIndex] === goal) {
    return endIndex;
  }
  let midIndex = Math.floor((startIndex + endIndex) / 2);
  if (sortedArr[midIndex] === goal) {
    return midIndex;
  } else if (goal > sortedArr[midIndex]) {
    return binarySearch(sortedArr, goal, midIndex + 1, endIndex)
  }
  return binarySearch(sortedArr, goal, startIndex, midIndex - 1);
}
