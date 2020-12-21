const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const operations = data.split("\n").map((operation) => {
  [operationName, operationValue] = operation.split(" ");
  return {
    name: operationName,
    value: +operationValue,
  };
});

for (let i = 0; i < operations.length; i++) {
  if (operations[i].name === "nop" || operations[i].name === "jmp") {
    const previousValue = operations[i];

    if (operations[i].name === "nop") {
      operations[i] = {
        name: "jmp",
        value: operations[i].value,
      };
    } else {
      operations[i] = {
        name: "nop",
        value: operations[i].value,
      };
    }

    const { exitCode, accumulator } = executeProgram(operations);

    if (exitCode === 0) {
      console.log('successfully executed')
      console.log(accumulator);
      return accumulator;
    } else {
      operations[i] = previousValue;
    }
  }
}

function executeProgram(operations) {
  let accumulator = 0;
  const visitedIndeces = {};

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

  const exitCode = i === operations.length ? 0 : 1;

  return {
    exitCode,
    accumulator,
  };
}
