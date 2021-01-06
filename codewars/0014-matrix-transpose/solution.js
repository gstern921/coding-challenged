function transpose(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j] = result[j] || [];
      result[j][i] = matrix[i][j];
    }
    
  }
  return result;
}