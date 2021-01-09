function isValidSet(quantities, shapes, colors, patterns) {
  const validQuantities = [1, quantities.length].includes(new Set(quantities).size);
  const validShapes = [1, shapes.length].includes(new Set(shapes).size);
  const validColors = [1, colors.length].includes(new Set(colors).size);
  const validPatterns = [1, patterns.length].includes(new Set(patterns).size);
  return validQuantities && validShapes && validColors && validPatterns;
}