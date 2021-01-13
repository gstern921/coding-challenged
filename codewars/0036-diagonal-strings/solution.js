function common(a,b,c){
  
  const aFrequencies = getNumFrequencies(a);
  const bFrequencies = getNumFrequencies(b);
  const cFrequencies = getNumFrequencies(c);
  
  return Object.keys(aFrequencies)
    .map((num) => num * Math.min(
      aFrequencies[num],
      (bFrequencies[num] || 0),
      (cFrequencies[num] || 0))
    )
    .reduce((sum, nextNum) => sum + nextNum, 0);
  
  function getNumFrequencies(nums) {
    const result = {};
    for (let num of nums) {
      result[num] = result[num] || 0;
      result[num]++;
    }
    return result;
  }
}