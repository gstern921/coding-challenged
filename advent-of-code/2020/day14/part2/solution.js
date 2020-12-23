const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const memory = {};

const instructions = data.split('\n');

let mask;
let memoryAddresses;

for (let instruction of instructions) {
  if (instruction.startsWith('mask')) {
    mask = getMaskFromInstruction(instruction);
  } else {
    let num = +getNumberValueFromInstruction(instruction);
    let memoryAddress = getMemoryAddressFromInstruction(instruction);
    memoryAddress = numberToBits(memoryAddress);
    memoryAddress = applyMaskToBits(mask, memoryAddress);
    memoryAddresses = getAllMemoryAddresses(memoryAddress);
    for (let address of memoryAddresses) {
      memory[address] = num;
    }
  }
}

let result = 0;
for (let num of Object.values(memory)) {
  result += num;
}

console.log(result);

function getMaskFromInstruction(instruction) {
  return instruction.split(' = ')[1];
}

function getMemoryAddressFromInstruction(instruction) {
  const openingBracketIndex = instruction.indexOf('[');
  const closingBracketIndex = instruction.indexOf(']');
  return instruction.substring(openingBracketIndex + 1, closingBracketIndex);
}

function getNumberValueFromInstruction(instruction) {
  return instruction.split(' = ')[1];
}

function getAllMemoryAddresses(address, memo = {}) {
  if (address in memo) {
    return memo[address];
  }
  if (!address.includes('X')) {
    return [ address ];
  } else {
    let result = [];
    result = result.concat(getAllMemoryAddresses(address.replace('X', '1')), getAllMemoryAddresses(address.replace('X', '0')))
    memo[address] = result;
    return result;
  }
  
}

function applyMaskToBits(mask, bits) {
  const bitsArray = bits.split('');
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '1') {
      bitsArray[i] = '1';
    } else if (mask[i] === 'X') {
      bitsArray[i] = 'X';
    }
  }
  return bitsArray.join('');
}

function numberToBits(num, bitsCount = 36) {
  const bits = Number(num).toString(2);
  if (bits.length < bitsCount) {
    const result = ('0'.repeat(bitsCount - bits.length) + bits)
    return result;
  } else if (bits.length > bitsCount) {
    const result = bits.substring(bits.length - bitsCount)
    return result;
  }
  return bits;
}
