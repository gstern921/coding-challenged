const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const nums = data.split("\n").map(Number);

const PREAMBLE_SIZE = 25;

const invalidNumberFromCypher = findInvalidNumberFromXMASCypher(
  nums,
  PREAMBLE_SIZE
);

const contiguousNumbers = findSumFromContiguousNumbersInList(
  invalidNumberFromCypher,
  nums
);

const encryptionWeakness = findEncryptionWeakness(contiguousNumbers);

console.log(encryptionWeakness);

function findInvalidNumberFromXMASCypher(list, preambleSize) {
  for (let i = preambleSize; i < list.length; i++) {
    const sumToFind = list[i];
    const validRange = list.slice(i - preambleSize, i);
    const isSumFound = hasSumOfTwoNumbersEqualTo(sumToFind, validRange);

    if (!isSumFound) {
      return sumToFind;
    }
  }
  return null;
}

function hasSumOfTwoNumbersEqualTo(sumToFind, arr = list) {
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

function findSumFromContiguousNumbersInList(sum, list) {
  if (sum == null) {
    return null;
  }

  let originIndex = 0;
  let currentSum = 0;

  for (let i = originIndex; i < list.length; i++) {
    currentSum += list[i];

    if (currentSum === sum) {
      return list.slice(originIndex, i + 1);
    } else if (currentSum > sum) {
      originIndex++;
      // We set i to 1 less than the origin index
      // Since it will be incremented by the for loop
      i = originIndex - 1;
      currentSum = 0;
    } else if (i === list.length - 1) {
      return null;
    }
  }
  return null;
}

function findEncryptionWeakness(contiguousNumbers) {
  if (Array.isArray(contiguousNumbers)) {
    const minNumber = Math.min(...contiguousNumbers);
    const maxNumber = Math.max(...contiguousNumbers);
    return minNumber + maxNumber;
  }

  return null;
}
