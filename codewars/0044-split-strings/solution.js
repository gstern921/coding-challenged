function solution(str){
  const result = [];
  
  for (let i = 0; i < str.length; i += 2) {
    if (i === str.length - 1) {
      result.push(`${str[i]}_`)
    } else {
      result.push(`${str[i]}${str[i + 1]}`);
    }
  }
  
  return result;
}