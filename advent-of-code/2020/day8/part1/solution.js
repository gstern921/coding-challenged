const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

let accumulator = 0;
const visitedIndeces = {};

const operations = data.split("\n").map((operation) => {
  [operationName, operationValue] = operation.split(" ");
  return {
    name: operationName,
    value: +operationValue,
  };
});
let i = 0;

while (
  !visitedIndeces.hasOwnProperty(i) &&
  i >= 0 &&
  i <= operations.length - 1
) {
  visitedIndeces[i] = true;
  const { name, value } = operations[i];
  switch (name) {
    case "acc":
      accumulator += value;
      i++;
      break;
    case "jmp":
      i += value;
      break;
    default:
      i++;
      break;
  }
}

console.log(accumulator);
