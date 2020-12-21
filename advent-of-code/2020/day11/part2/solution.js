const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

let seats = data.split("\n").map((row) => row.split(""));

const OCCUPIED = "#";
const EMPTY = "L";

let updateCount;

while (updateCount == undefined || updateCount > 0) {
  let update = updateSeats(seats);
  seats = update.updatedSeats;
  updateCount = update.numberOfUpdates;
}

console.log("Done updating. ", getOccupiedSeatsCount(seats));

function createCopy(seats) {
  const copy = seats.slice();

  for (let row = 0; row < copy.length; row++) {
    copy[row] = copy[row].slice();
  }

  return copy;
}

function getOccupiedAdjacentSeats(row, col, seats) {
  let numberOfOccupied = 0;

  const nextRow = row + 1 < seats.length;
  const prevRow = row - 1 >= 0;

  const nextCol = col + 1 < seats[0].length;
  const prevCol = col - 1 >= 0;

  // Look to the right
  numberOfOccupied += look({x: 1}, {row, col, seats});

  // Look to the left
  numberOfOccupied += look({x: -1}, {row, col, seats});

  // Look up
  numberOfOccupied += look({y: -1}, {row, col, seats});

  // Look down
  numberOfOccupied += look({y: 1}, {row, col, seats});

  // Look up and to the left
  numberOfOccupied += look({x: -1, y: -1}, {row, col, seats});

  // Look up and to the right
  numberOfOccupied += look({x: 1, y: -1}, {row, col, seats});

  // Look down and to the right
  numberOfOccupied += look({x: 1, y: 1}, {row, col, seats});

  // Look down and to the left
  numberOfOccupied += look({x: -1, y: 1}, {row, col, seats});

  return numberOfOccupied;

  function look({ x, y }, { seats, row, col }) {

    const nextRow = row + 1 < seats.length;
    const prevRow = row - 1 >= 0;

    const nextCol = col + 1 < seats[0].length;
    const prevCol = col - 1 >= 0;

    if (
      x > 0 && !nextCol ||
      x < 0 && !prevCol ||
      y > 0 && !nextRow ||
      y < 0 && !prevRow) {
      return 0;
    }

    let i;
    let j;

    if (y > 0) {
      i = row + 1;
    } else if (y < 0) {
      i = row - 1;
    } else {
      i = row;
    }

    if (x > 0) {
      j = col + 1;
    } else if (x < 0) {
      j = col - 1;
    } else {
      j = col;
    }

    while (true) {

      if (seats[i][j] === OCCUPIED) {
        return 1;
      }

      if (seats[i][j] === EMPTY ||
        x > 0 && j === seats[0].length - 1 ||
        y > 0 && i === seats.length - 1 ||
        x < 0 && j === 0 ||
        y < 0 && i === 0
        ) {
        return 0;
      }

      if (y < 0) {
        i--;
      } else if (y > 0) {
        i++;
      }

      if (x < 0) {
        j--;
      } else if (x > 0) {
        j++;
      }

      if (!x && !y) {
        return 0;
      }
    }
  }
}

function updateSeats(seats) {
  const seatsCopy = createCopy(seats);

  let numberOfUpdates = 0;

  for (let row = 0; row < seats.length; row++) {
    for (let col = 0; col < seats[row].length; col++) {
      const numberOfOccupied = getOccupiedAdjacentSeats(row, col, seats);
      const currentSeat = seats[row][col];

      if (numberOfOccupied === 0 && currentSeat === EMPTY) {
        seatsCopy[row][col] = OCCUPIED;
        numberOfUpdates++;
      } else if (numberOfOccupied >= 5 && currentSeat === OCCUPIED) {
        seatsCopy[row][col] = EMPTY;
        numberOfUpdates++;
      }
    }
  }

  return {
    updatedSeats: seatsCopy,
    numberOfUpdates,
  };
}

function getOccupiedSeatsCount(seats) {
  let numOfOccupiedSeats = 0;

  for (let row = 0; row < seats.length; row++) {
    for (let col = 0; col < seats[row].length; col++) {
      if (seats[row][col] === OCCUPIED) {
        numOfOccupiedSeats++;
      }
    }
  }

  return numOfOccupiedSeats;
}
