function sumOfDivided(lst) {
  function isPrime(num) {
    if (num === 1) {
      return false;
    }
    var halfNum = num / 2,
      i = 2;
    while (i <= Math.abs(halfNum)) {
      if (num % i === 0) {
        return false;
      }
      i += 1;
    }
    return true;
  }

  function returnPrimeFactors(numArr) {
    var result = [],
      currNum,
      halfNum,
      i,
      len,
      j;

    for (i = 0, len = numArr.length; i < len; i += 1) {
      currNum = numArr[i];
      j = 2;
      while (j <= Math.abs(currNum)) {
        if (currNum % j === 0 && isPrime(j)) {
          result.push(j);
        }
        j += 1;
      }
    }

    result = result
      .sort(function (a, b) {
        return a - b;
      })
      .filter(function (a, i, arr) {
        return a !== arr[i + 1];
      })
      .map(function (a) {
        return [].concat(a);
      });
    return result;
  }
  function getSums(arr) {
    var result = 0;
    for (var i = 0, len = arr.length; i < len; i += 1) {
      result = 0;
      for (var j = 0, len2 = lst.length; j < len2; j += 1) {
        if (lst[j] % arr[i][0] === 0) {
          result += lst[j];
        }
      }
      arr[i].push(result);
    }
    return arr;
  }

  return getSums(returnPrimeFactors(lst));
}
