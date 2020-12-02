# Counting in English one, two, three... to 2 Quadrillion (2,000,000,000,000,000)

Please create a function which takes a number and returns the name of the number in English as a lowercase string. The function should support at least the numbers ±2 Quadrillion (±2,000,000,000,000,000) as well as positive and negative infinity.

This is a harder kata than it might sound! Be sure to read the requirements thoroughly.

## Rules

- positive integers - Print number in english.
  - Numbers between 20 and 99 use hyphens. e.g. forty-five
  - Use a space to separate all other words. e.g. one hundred twenty-three
  - The word 'and' is used to separate the tens space from the hundreds space in each period
    - 111 -> Good: "one hundred and eleven" - Bad: "one hundred eleven"
    - 1,101,101 Good: "one million one hundred and one thousand one hundred and one" - Bad: - "one million one hundred one thousand one hundred one"
  - ...also the word 'and' is used to separate the tens and ones space from the lowest number the left of the tens place for numbers over 1000.
    - 1,001 -> Good: "one thousand and one" - Bad: "one thousand one"
    - 1,000,001 -> Good: "one million and one" - Bad: "one million one"
    - 1,000,011 -> Good: "one million and eleven" - Bad: "one million eleven"
    - 1,000,111 -> Good: "one million one hundred and eleven" - Bad: "one million and one hundred and eleven"
    - 1,011,011 -> Good: "one million eleven thousand and eleven" Bad: "one million and eleven - thousand and eleven"
  - Support integers up to ±2 Quadrillion.
  - Consult this list for large number names. Always use the 'short scale' popular in the - USA.
- zero/nil - Print 'zero'.
- negative integers - Print 'negative' before the number
- decimal numbers - Print the number to the left of the decimal then 'point' then the - numbers to the right of the decimal each digit at a time. (see example)
  - Support at least 5 decimal places.
- non-numbers - Strings that evaluate to numbers should be converted to numbers. NaN - values must throw an error.
- Positive / Negative infinity - Print 'infinity' or 'negative infinity'

## Example

```
numberToEnglish(1); // -> "one"
numberToEnglish(11); // -> "eleven"
numberToEnglish(1.23); // -> "one point two three"
numberToEnglish(-45); // -> "negative forty-five"
numberToEnglish(100023999); // -> "one hundred million twenty-three thousand nine hundred and ninety-nine"
```

## Large number names

- Million 10^6
- Billion 10^9
- Trillion 10^12
- Quadrillion 10^15
