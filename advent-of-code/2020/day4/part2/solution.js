const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}
const fieldValidators = {
  byr: (val) => validateBirthYear(val),
  iyr: (val) => validateIssueYear(val),
  eyr: (val) => validateExpirationYear(val),
  hgt: (val) => validateHeight(val),
  hcl: (val) => validateHairColor(val),
  ecl: (val) => validateEyeColor(val),
  pid: (val) => validatePassportId(val),
}

let validPassports = getPassportsFromData(data)
  .filter((passport) => {
    return isPassportValid(passport, fieldValidators);
  });

function getPassportsFromData(data) {
  return data
    .split("\n\n")
    .map((passportData) => {
      return passportData.split(/\n|\s/);
    })
    .map((passportKeysAndValues) => {
      return passportKeysAndValues.reduce((info, keyValue) => {
        const [key, value] = keyValue.split(":");
        info[key] = value;
        return info;
      }, {});
    });
}

function isPassportValid(passport, fieldValidators) {

  const fieldsToValidate = Object.keys(fieldValidators);
  for (let field of fieldsToValidate) {
    const validator = fieldValidators[field];
    if (!validator(passport[field])) {
      return false;
    }
  }
  return true;
}

function validateBirthYear(birthYear, currYear = 2020) {
  if (typeof birthYear !== 'string') {
    return false;
  }

  const year = +birthYear;
  const currentYear = +currYear;
  return currYear - year >= 18 && currYear - year <= 100;
}

function validateIssueYear(issueYear, currYear = 2020) {
  if (typeof issueYear !== 'string') {
    return false;
  }

  const ageOfIssue = +currYear - +issueYear;
  return ageOfIssue >= 0 && ageOfIssue <= 10;
}

function validateExpirationYear(expirationYear, currYear = 2020) {
  if (typeof expirationYear !== 'string') {
    return false;
  }

  const expirationYearDiff = +expirationYear - +currYear;
  return expirationYearDiff >=0 && expirationYearDiff <= 10;
}

function validateHeight(height) {
  
  if (typeof height !== 'string') {
    return false;
  }
  const unit = height.slice(-2).toLowerCase();
  const measurement = parseInt(height, 10);

  const minHeightCentimeters = 150;
  const maxHeightCentimeters = 193;
  const minHeightInches = 59;
  const maxHeightInches = 76;

  if (unit === 'cm') {
    return measurement >= minHeightCentimeters  && measurement <= maxHeightCentimeters;
  } else if (unit === 'in') {
    return measurement >= minHeightInches && measurement <= maxHeightInches;
  }
  return false;
}

function validateHairColor(hairColor) {
  if (typeof hairColor !== 'string') {
    return false;
  }

  const hexColorRegex = /^#[0-9a-f]{6}$/i;
  return hexColorRegex.test(hairColor);
}

function validateEyeColor(eyeColor) {
  if (typeof eyeColor !== 'string') {
    return false;
  }

  const color = eyeColor.toLowerCase();
  const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  return validColors.includes(color);
}

function validatePassportId(passportId) {
  if (typeof passportId !== 'string') {
    return false;
  }

  return passportId.length === 9 && !Number.isNaN(+passportId);
}
