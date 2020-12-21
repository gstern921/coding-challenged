const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

if (!data) {
  throw new Error("No Data Found!");
}

const allBagsContents = data
  .split("\n")
  .map((bagInfo) => {
    return bagInfo.replace(/( bags?)|\./g, "").split(/(?: contain )|(?:, )/);
  })
  .filter((bagInfo) => !bagInfo.includes("no other"))
  .reduce((allContents, bagInfo) => {
    const bagName = bagInfo[0];
    const contents = bagInfo.slice(1);
    contents.forEach((content) => {
      const [quantity, ...containedBagNameParts] = content.split(" ");
      const containedBagName = containedBagNameParts.join(" ");
      allContents[bagName] = allContents[bagName] || {};
      allContents[bagName][containedBagName] = +quantity;
    });
    return allContents;
  }, {});

function getBagCountForContainer(containerName, bagsContents, count = 0) {
  const bagsContained = bagsContents[containerName];

  if (!bagsContained) {
    return count;
  }

  let total = count;

  for (let [bagName, quantity] of Object.entries(bagsContained)) {
    total += getBagCountForContainer(
      bagName,
      bagsContents,
      (count || 1) * quantity
    );
  }
  return total;
}

const bagName = "shiny gold";
console.log(getBagCountForContainer(bagName, allBagsContents));
