# Diagonal Strings

This challenge can be found [here](https://www.codewars.com/kata/5c6d80d7ff00de2dcc4d4188)

In this kata, you have a string array has N elements and each element of array has N length(NxN).
```
For Example: {"abcd","kata","1234","qwer"}
```
You must first sort the array alphabetically. And output consists of letters obtained diagonally (from upper left to lower right).
```
For Example:

  1234                       abcd                           
  abcd                       kata                           
  kata                       qwer                           
  qwer -> 1234 => "1btr"     1234 -> abcd => "aae4"         

  kata                       qwer
  qwer                       1234
  1234                       abcd
  abcd -> kata => "kw3d"     kata -> qwer => "q2ca"

  Output : {"aae4","kw3d","1btr","q2ca"} (by input order)
```
### TASK
Write a function that accepts a square(NxN) array and returns diagonal strings as array (as the order of input array).

### NOTES
If input array is not square(NxN) (array with 0 length is not accept as square too) returns null.

