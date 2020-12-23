const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const memory = {};

const instructions = data.split('\n');

let mask;

for (let instruction of instructions) {
  if (instruction.startsWith('mask')) {
    mask = getMaskFromInstruction(instruction);
  } else {
    const memoryAddress = getMemoryAddressFromInstruction(instruction);
    let number = getNumberValueFromInstruction(instruction);
    const numberBits = numberToBits(number);
    number = applyMaskToBits(mask, numberBits);
    memory[memoryAddress] = number;
  }
}

console.log(memory)
let result = 0;
for (let binaryNum of Object.values(memory)) {
  result += parseInt(binaryNum, 2);
  console.log(result)
}

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

function applyMaskToBits(mask, bits) {

  const bitsArray = bits.split('');

  for (let i = 0; i < mask.length; i++) {
    const char = mask[i];
    if (char === '1') {
      bitsArray[i] = '1';
    } else if (char === '0') {
      bitsArray[i] = '0';
    }
  }

  return bitsArray.join('');

}

function numberToBits(num, bitsCount = 36) {
  const bits = Number(num).toString(2);
  // console.log(bits)
  if (bits.length < bitsCount) {
    // console.log(`length less than ${bitsCount}`)
    const result = ('0'.repeat(bitsCount - bits.length) + bits)
    // console.log(result)
    return result;
  } else if (bits.length > bitsCount) {
    // console.log(`length greater than ${bitsCount}`)
    const result = bits.substring(bits.length - bitsCount)
    // console.log(result);
    return result;
  }
  return bits;
}
