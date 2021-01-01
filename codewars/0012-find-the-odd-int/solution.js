function findOdd(nums) {
  
  const frequencies = {};
  
  for (let num of nums) {
    frequencies[num] = frequencies[num] || 0;
    frequencies[num]++;
  }
  
  return Object.keys(frequencies)
    .reduce(
      (result, key) => frequencies[key] % 2 === 1 ? Number(key) : result
    , null);
    
}