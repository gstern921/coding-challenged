function sumStrings(a, b) {
  var args = Array.prototype.slice.call(arguments);
  var tensDigit = 0;
  var num1Array = args[0].split("");
  var num1ArrayLength = num1Array.length;
  var num2Array = args[1].split("");
  var num2ArrayLength = num2Array.length;
  var result = [];
  var i, firstNum, secondNum, sum;

  for (var i = 1; i <= Math.max(num1ArrayLength, num2ArrayLength); i++) {
    firstNum = setStringAsIntOrZero(num1Array[num1ArrayLength - i]);

    secondNum = setStringAsIntOrZero(num2Array[num2ArrayLength - i]);

    sum = firstNum + secondNum + tensDigit;

    tensDigit = sum >= 10 ? 1 : 0;
    sum = sum % 10;

    result.push(sum);
  }
  result.push(tensDigit);
  return result
    .map(function (num) {
      return String(num);
    })
    .reverse()
    .join("")
    .replace(/^0+/, "");

  function setStringAsIntOrZero(str) {
    var result = isStringInteger(str) ? Number(str) : 0;
    return result;
  }
  function isStringInteger(str) {
    return (
      !isNaN(parseFloat(str)) &&
      isFinite(str) &&
      parseInt(str, 10) === Number(str)
    );
  }
}
