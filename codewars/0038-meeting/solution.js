function meeting(s) {
  const names = s.split(';')
    .map(name => name.toUpperCase()
    .split(':'))
    .sort((name1, name2) => {
      const [firstName1, lastName1] = name1;
      const [firstName2, lastName2] = name2;
      if (lastName1 === lastName2) {
        return (firstName1 > firstName2) - (firstName1 < firstName2);
      } else {
        return (lastName1 > lastName2) - (lastName1 < lastName2);
      }
    })
    .map(name => name.reverse().join(', '))
  return `(${names.join(')(')})`
}