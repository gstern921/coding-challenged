function getConsectiveItems(items, key){
  const isNumber = typeof items === 'number';
  let itemsList = String(items).split('');
  if (isNumber) {
    itemsList = itemsList.map(Number);
  }
  let currConsecutive = 0;
  let result = 0;
  for (let i = 0; i < itemsList.length; i++) {
    const item = itemsList[i];
    if (item === key) {
      currConsecutive++;
      result = Math.max(result, currConsecutive);
    } else {
      currConsecutive = 0;
    }
  }
  return result;
}