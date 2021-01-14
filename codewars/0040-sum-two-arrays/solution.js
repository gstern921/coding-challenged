function addArrays(array1, array2) {
  
  if (!array1.length) {
    return array2;
  } else if (!array2.length) {
    return array1;
  }
  
  const sum = +array1.join('') + +array2.join('');
  
  const result = String(sum).split('').map(Number).filter(num => !isNaN(num));
  
  if (sum < 0) {
    result[0] = -result[0];
  }
  
  return result;
  
}