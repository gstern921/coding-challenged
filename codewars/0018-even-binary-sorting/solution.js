function evenBinary(n) {
  
  const binaryNums = n.split(' ');
  
  for (let i = 0; i < binaryNums.length - 1; i++) {
    for (let j = i + 1; j < binaryNums.length; j++) {
      
      const firstNum = binaryNums[i];
      const secondNum = binaryNums[j];
      
      if (isEvenBinaryNum(firstNum) && isEvenBinaryNum(secondNum)) {
        if (parseInt(firstNum, 2) > parseInt(secondNum, 2)) {
          // Swap the numbers
          binaryNums[i] = secondNum;
          binaryNums[j] = firstNum;
        }
      }
    }
  }
  
  return binaryNums.join(' ');
  
  function isEvenBinaryNum(binaryNum) {
    return binaryNum.endsWith('0');
  }
}