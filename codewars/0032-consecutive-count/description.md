# Consecutive Count

This challenge can be found [here](https://www.codewars.com/kata/59c3e819d751df54e9000098)

I want to know the longest length of consecutive items of X there are in Y. I will provide you an item (Y), and a key to search for (X). Return the length of the longest segment of consecutive keys (X) in Y.

### Rules:

The item will be either an integer or string data type.

The key will be an integer or string data type.

The return value will be an integer data type.

If the key does not appear in the number, return 0.

### Example 1:
```
items = 90000;

key = 0;

return value: 4;
```

### Example 2:

```
items = 'abcdaaadse';

key = 'a';

return value: 3;
```