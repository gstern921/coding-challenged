function numberToEnglish(n) {
  var periods = [];
  var i;
  var result = "";
  var integralPortionOfN;
  var decimalDigitsOfN;

  ////// EXIT CONDITIONS

  if (isNaN(n))
    throw new TypeError(
      `tried to call numberToEnglish with invalid argument!: ${n}`
    );

  if (n === Infinity) return "infinity";

  if (n === -Infinity) return "negative infinity";

  if (n === 0) return "zero";

  ////// END EXIT CONDITIONS

  integralPortionOfN = Math.floor(Math.abs(n));

  i = 1;

  do {
    periods.push(Math.floor((integralPortionOfN % (i * 1000)) / i));

    i *= 1000;
  } while (Math.floor(integralPortionOfN / i));

  periods = periods
    .map(Number)
    .map(numberBelowOneThousandToEnglish)
    .map(addPowersOfOneThousand)
    .filter(validValues)
    .reverse();

  if (
    periods.length > 1 &&
    periods[periods.length - 1].indexOf("hundred") === -1
  ) {
    periods[periods.length - 1] = `and ${periods[periods.length - 1]}`;
  }

  if (n < 0) {
    periods.unshift("negative");
  }

  if (n % 1 !== 0) {
    decimalDigitsOfN = ["point"].concat(
      String(n).split(".")[1].split("").map(numberBelowOneThousandToEnglish)
    );
  } else {
    decimalDigitsOfN = [];
  }

  return periods.concat(decimalDigitsOfN).join(" ");

  function numberBelowOneThousandToEnglish(num) {
    var absoluteValueOfNum = Math.abs(num);

    var ones = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    var digitNames = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
    };

    var result = "";
    var hundredsDigit;
    var tensDigit;
    var onesDigit;

    if (absoluteValueOfNum >= 1000) {
      throw new RangeError(
        "Passed an invalid number to threeDigitNumberToString! Passed " + num
      );
    } else if (!absoluteValueOfNum) {
      return "zero";
    }

    hundredsDigit = Math.floor(absoluteValueOfNum / 100);
    tensDigit = Math.floor((absoluteValueOfNum % 100) / 10);
    onesDigit = Math.floor(absoluteValueOfNum % 10);

    if (hundredsDigit) {
      result += digitNames[hundredsDigit] + " hundred ";
    }

    if (tensDigit || onesDigit) {
      if (result.length) {
        result += "and ";
      }

      if (tensDigit >= 2) {
        result +=
          onesDigit === 0
            ? digitNames[tensDigit * 10]
            : hyphenateWords(digitNames[tensDigit * 10], digitNames[onesDigit]);
      } else if (tensDigit === 1) {
        result +=
          onesDigit === 0
            ? digitNames[tensDigit * 10]
            : digitNames[tensDigit * 10 + onesDigit];
      } else {
        result += digitNames[onesDigit];
      }
    }

    return result.trim();

    function hyphenateWords(...words) {
      return words.join("-");
    }
  }

  function addPowersOfOneThousand(num, power) {
    var powersOfOneThousand = [
      "",
      " thousand",
      " million",
      " billion",
      " trillion",
      " quadrillion",
    ];

    if (num === "zero") {
      return num;
    }

    return num + powersOfOneThousand[power];
  }

  function validValues(value, index, array) {
    if (array.length > 1) {
      if (value !== "zero") {
        return value;
      }
    } else {
      return value;
    }
  }
}
