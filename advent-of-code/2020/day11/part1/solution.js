const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

let seats = data.split('\n').map(row => row.split(''));

const OCCUPIED = '#';
const EMPTY = 'L';

let numberOfRounds = 0;
let updateCount;

while (updateCount == undefined || updateCount > 0) {
  
  let update = updateSeats(seats);
  seats = update.updatedSeats;
  updateCount = update.numberOfUpdates;
  numberOfRounds++;

}

console.log('Done updating. ', getOccupiedSeatsCount(seats));

function createCopy(seats) {

  const copy = seats.slice();

  for (let row = 0; row < copy.length; row++) {

    copy[row] = copy[row].slice();

  }

  return copy;
}

function getOccupiedAdjacentSeats(row, col, seats) {

  const prevRow = seats[row - 1] || [];
  const nextRow = seats[row + 1] || [];
  
  const adjacentSeats = [
    seats[row][col + 1],
    seats[row][col - 1],
    prevRow[col],
    prevRow[col - 1],
    prevRow[col + 1],
    nextRow[col],
    nextRow[col - 1],
    nextRow[col + 1],
  ]

  return adjacentSeats.filter((seat) => seat === OCCUPIED).length;

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
      } else if (numberOfOccupied >= 4 && currentSeat === OCCUPIED) {
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
