const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}
const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let validPassports = getPassportsFromData(data)
  .filter((passport) => {
    return isPassportValid(passport, requiredFields);
  });
// console.log(validPassports.length);

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

function isPassportValid(passport, requiredFields) {
  const passportFields = Object.keys(passport);
  return requiredFields.every((field) => passportFields.includes(field));
}
