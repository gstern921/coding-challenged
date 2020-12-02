function nextBigger(n) {
  var numArr = String(n).split(""),
    firstHalf = [],
    removedItem = [],
    nextItem = [],
    secondHalf = [],
    currNum = 0,
    nextNum = 0,
    result;

  result = numArr.every(function (a, i, arr) {
    return arr[i + 1] ? a >= arr[i + 1] : true;
  });
  if (result === true) {
    return -1;
  }

  if (numArr.length === 2) {
    return parseInt(numArr[1] + numArr[0]);
  }
  for (i = numArr.length - 1; i >= 1; i -= 1) {
    if (numArr[i] > numArr[i - 1]) {
      secondHalf = numArr.slice(i - 1, numArr.length);
      firstHalf = numArr.slice(0, i - 1);
      removedItem = secondHalf.shift();
      nextItem = secondHalf.shift();
      secondHalf.sort();
      break;
    }
  }

  for (i = 0; i < secondHalf.length; i += 1) {
    if (secondHalf[i] > removedItem[0] && secondHalf[i] < nextItem[0]) {
      secondHalf.push(nextItem[0]);
      nextItem = secondHalf.splice(i, 1);
      secondHalf.sort();
      break;
    }
  }

  secondHalf = secondHalf.concat(removedItem);
  secondHalf.sort();
  result = [].concat(firstHalf, nextItem, secondHalf);
  result = result.join("");
  return parseInt(result);
}
