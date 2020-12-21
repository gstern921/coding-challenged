const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const boardingPasses = data.split("\n");

const mySeatId = findMySeatId(boardingPasses);

function calcSeatId(boardingPass) {
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

  return rowStart * 8 + columnStart;

  function calcLowerHalf(start, end) {
    return start + Math.ceil((end - start) / 2);
  }
  
  function calcUpperHalf(start, end) {
    return start + Math.floor((end - start) / 2);
  }
}

function findMySeatId(boardingPasses) {
  const seatIds = boardingPasses.map(calcSeatId);
  seatIds.sort((a, b) => a - b);

  for (let i = 0; i < seatIds.length - 1; i++) {
    if (seatIds[i + 1] !== seatIds[i] + 1) {
      return seatIds[i] + 1;
    }
  }
}
