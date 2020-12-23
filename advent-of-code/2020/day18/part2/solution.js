const fs = require("fs");
const path = require("path");

const fileName = "input.txt";

let data = fs.readFileSync(path.join(__dirname, fileName), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const equations = data.split("\n");

let sum = 0;

for (let i = 0; i < equations.length; i++) {
  const equation = equations[i];
  const result = part2(equation);
  sum += result;
}
console.log(sum);

function part2(data) {
  const expression = data.replace(/\s/g, "");
  const numbers = [];
  const operators = [];
  let currentNumber = "";
  for (let i = 0; i < expression.length; i++) {
    const currentChar = expression[i];

    if (!isNumber(currentChar) && currentNumber) {
      numbers.push(+currentNumber);
      currentNumber = "";
    }

    if (isOperator(currentChar)) {
      if (numbers.length >= 2 && operators[operators.length - 1] === "+") {
        performEvaluation(numbers, operators);
      }
      operators.push(currentChar);
    } else if (isNumber(currentChar)) {
      currentNumber += currentChar;
    } else if (currentChar === ")") {
      while (operators[operators.length - 1] !== "(") {
        performEvaluation(numbers, operators);
      }

      operators.pop();
    } else if (currentChar === "(") {
      operators.push(currentChar);
    }
  }

  if (currentNumber) {
    numbers.push(+currentNumber);
    currentNumber = "";
  }

  while (operators.length) {
    if (isOperator(operators[operators.length - 1])) {
      performEvaluation(numbers, operators);
    } else {
      operators.pop();
    }
  }

  const result = numbers.pop();
  return result;
}

function isNumber(char) {
  return /^[0-9]$/.test(char);
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function performEvaluation(nums, operators) {
  const num2 = nums.pop();
  const num1 = nums.pop();

  const operator = operators.pop();

  const result = evaluate(num1, operator, num2);
  nums.push(result);

  function evaluate(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        throw new Error(
          `Operator not specified in evaluate, args = ${num1}, ${operator}, ${num2}`
        );
    }
  }
}
