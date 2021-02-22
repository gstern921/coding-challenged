function findEvenIndex(arr) {
  
  let leftSum = 0;
  let rightSum = arr.reduce((sum,num)=> sum + num, 0);
  
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      leftSum += arr[i-1];
    }
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
  }
  
  return -1;
}