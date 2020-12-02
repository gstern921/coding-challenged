function multiply(a, b) {
  let allZeros = /^0+$/;

  if (allZeros.test(a) || allZeros.test(b)) return "0";

  let leadingZeros = /^0+/;

  let trimmedA = a.replace(leadingZeros, "");
  let trimmedB = b.replace(leadingZeros, "").split("").reverse().join("");

  let prod;
  let result = "0";

  for (let bIndex = 0; bIndex < trimmedB.length; bIndex++) {
    prod = subMultiply(trimmedA, trimmedB[bIndex]) + "0".repeat(bIndex);

    result = stringAddition(result, prod);
  }

  return result;

  function subMultiply(str, char) {
    let temp = 0;
    let product = "";

    if (char === "0") {
      return "0";
    }

    if (char === "1") {
      return str;
    }

    for (let i = str.length - 1; i >= 0; i--) {
      temp = temp + str[i] * char;

      product = (temp % 10) + product;

      if (temp >= 10) {
        temp = Math.floor(temp / 10);
      } else {
        temp = 0;
      }
    }

    if (temp) {
      product = temp + product;
    }

    return product;
  }

  function stringAddition(sA, sB) {
    let sum = "";
    let temp = 0;

    let strA = sA.split("").reverse().join("");
    let strB = sB.split("").reverse().join("");

    for (let i = 0; i < Math.max(strA.length, strB.length); i++) {
      if (typeof strA[i] === "undefined" || typeof strB[i] === "undefined") {
        temp = temp + Number(strA[i] || strB[i]);
      } else {
        temp = temp + Number(strA[i]) + Number(strB[i]);
      }

      sum = (temp % 10) + sum;

      temp = temp >= 10 ? 1 : 0;
    }

    if (temp) {
      sum = temp + sum;
    }

    return sum;
  }
}
