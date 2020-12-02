function snail(n) {
  var i_snail = function (n, x, y) {
    var result = [];
    for (var i = x; i <= y; i++) {
      result.push(n[x][i]);
    }
    for (var i = x + 1; i <= y; i++) {
      result.push(n[i][y]);
    }
    for (var i = y - 1; i >= x; i--) {
      result.push(n[y][i]);
    }
    for (var i = y - 1; i >= x + 1; i--) {
      result.push(n[i][x]);
    }
    if (x < y) {
      return result.concat(i_snail(n, x + 1, y - 1));
    } else {
      return result;
    }
  };
  return i_snail(n, 0, n[0].length - 1);
}
