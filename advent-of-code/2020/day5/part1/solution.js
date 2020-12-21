const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const boardingPasses = data.split("\n");

// console.log(boardingPasses);

let maxSeatId = 0;
let boardingPass = boardingPasses[0];

for (let boardingPass of boardingPasses) {
  let rowStart = 0;
  let rowEnd = 127;

  let columnStart = 0;
  let columnEnd = 7;

  for (let char of boardingPass) {
    if (char === "B") {
      rowStart = calcLowerHalf(rowStart, rowEnd);
    } else if (char === "F") {
      rowEnd = calcUpperHalf(rowStart, rowEnd);
    } else if (char === "R") {
      columnStart = calcLowerHalf(columnStart, columnEnd);
    } else if (char === "L") {
      columnEnd = calcUpperHalf(columnStart, columnEnd);
    }
  }

  const seatId = calcSeatId(rowStart, columnStart);
  maxSeatId = Math.max(maxSeatId, seatId);
}

function calcLowerHalf(start, end) {
  return start + Math.ceil((end - start) / 2);
}

function calcUpperHalf(start, end) {
  return start + Math.floor((end - start) / 2);
}

function calcSeatId(row, column) {
  return row * 8 + column;
}
