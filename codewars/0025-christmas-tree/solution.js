function christmasTree(height) {
  const tree = new Array(height);
  const charsPerRow = height * 2 - 1;
  for (let i = tree.length - 1; i >= 0; i--) {
    const distanceFromFinalIndex = tree.length - 1 - i;
    const padding = ' '.repeat(distanceFromFinalIndex);
    const treeBody = '*'.repeat(charsPerRow - (distanceFromFinalIndex * 2));
    tree[i] = padding + treeBody + padding;
  }
  return tree.join('\n')
}