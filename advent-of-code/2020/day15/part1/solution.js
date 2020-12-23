const numbers = [14,3,1,0,9,5];

const spokenNumbers = {};

let lastNumberSpoken;

for (let i = 0; i < 2020; i++) {
  if (i < numbers.length) {
    speakNumber(numbers[i], i, true);
    lastNumberSpoken = numbers[i];
  } else {
    const num = speakNumber(lastNumberSpoken, i - 1);
    lastNumberSpoken = num;
  }
}

console.log(lastNumberSpoken)

function speakNumber(num, index, isStartingNumber = false, spokenNums = spokenNumbers) {
  if (spokenNums[num] === undefined) {
    // Number has not been spoken before
    // Set spokenNums[num] to last called index
    spokenNums[num] = index;
  }

  if (spokenNums[num] === index) {
    const result = isStartingNumber ? num : 0;
    return result;
  }

  // Number has been spoken before
  const diff = index - spokenNums[num];
  spokenNums[num] = index;
  return diff;
}
