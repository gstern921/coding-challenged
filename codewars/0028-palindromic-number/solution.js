function palindromize(number) {
  let n = number;
  let iterationCount = 0;

  while (!isPalindrome(n) || iterationCount > 1000) {
    n += reverseNumber(n);
    iterationCount++;
  }

  return `${iterationCount} ${n}`;

  function isPalindrome(num) {
    const digits = String(num);
    for (let i = 0, j = digits.length - 1; i <= j; i++, j--) {
      if (digits[i] !== digits[j]) {
        return false;
      }
    }
    return true;
  }

  function reverseNumber(num) {
    return Number(String(num).split("").reverse().join(""));
  }
}
