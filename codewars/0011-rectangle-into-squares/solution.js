function sqInRect(lng, wdth){
  if (lng < 1 || wdth < 1 || lng === wdth) {
    return null;
  }
  let l = lng;
  let w = wdth;
  const result = [];
  while (l >= 1 && w >= 1) {
    if (l > w) {
      result.push(w);
      l -= w;
    } else {
      result.push(l);
      w -= l;
    }
  }
  return result;
}