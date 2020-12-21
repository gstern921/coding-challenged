const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

if (!data) {
  throw new Error('No Data Found!')
}

const bagContainers = data
  .split('\n')
  // .slice(230,240)
  .map((bagInfo) => {
  // return bagInfo;
  return bagInfo
    .replace(/( bags?)|\./g, '')
    .split(/(?: contain )|(?:, )/)
  })
  .filter((bagInfo) => !bagInfo.includes('no other'))
  .reduce((bagContainedBy, bagInfo) => {
    const bagName = bagInfo[0];
    const bagContents = bagInfo.slice(1);
    bagContents.forEach((content => {
      const [quantity, ...containedBagNameParts] = content.split(' ')
      const containedBagName = containedBagNameParts.join(' ');
      bagContainedBy[containedBagName] = bagContainedBy[containedBagName] || {};
      bagContainedBy[containedBagName][bagName] = +quantity;
    }));
    return bagContainedBy;
  }, {});

  function getContainersForBagName(bagName, containers = []) {

    const bagNameContainers = bagContainers[bagName];

    if (!bagNameContainers) {
      return;
    }

    const containerNames = Object.keys(bagNameContainers);

    for (let containerName of containerNames) {
      if (!containers.includes(containerName)) {
        containers.push(containerName);
        getContainersForBagName(containerName, containers);
      }
    }

    return containers;
  }

  const bagName = 'shiny gold';

  console.log(getContainersForBagName(bagName).length);

  // console.log(bagContainers[bagName]);
