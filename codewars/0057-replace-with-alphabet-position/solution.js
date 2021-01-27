function alphabetPosition(text) {
  return text
    .split('')
    .filter(c => /[a-z]/i.test(c))
    .map(c => c.toLowerCase().charCodeAt(0) - 96)
    .join(' ')
}