function howmuch(m, n) {
  
  const carQuantity = 9;
  const carRemainder = 1;
  const boatQuantity = 7;
  const boatRemainder = 2;
  
  const result = [];
  
  for (let i = Math.min(m, n); i <= Math.max(m, n); i++) {
    const carCost = ((i - carRemainder) / carQuantity);
    const boatCost = ((i - boatRemainder) / boatQuantity);
    
    if (carCost % 1 === 0 && boatCost % 1 === 0) {
      result.push([`M: ${i}`, `B: ${boatCost}`, `C: ${carCost}`]);
    }
  
  }
  
  return result;
}