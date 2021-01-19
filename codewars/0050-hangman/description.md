# Hangman

This challenge can be found [here](https://www.codewars.com/kata/5761bb4f3665fe9315000003)

Hangman is a game where you must guess letters of the alphabet to complete a word given the length. You have decided you want to impress your friends with your hangman skills and create a program given a list of predefined words that can complete any hangman guess first time!

### Task
You must implement the Machine class that takes a word list and returns a player class that takes a length of the word you must guess. You must then make guesses returning letters of the alphabet to complete the word within 11 failed guesses, as a response you will receive a string representation of the letters found and the letters remaining unknown. Good luck!

### Examples
```
word: printable

guess: a
response: _____a___

guess: b
response: _____a___

guess: p
response: p____a___
```

### Info
The word list will be passed into the machine constructor and you may manipulate that how you see fit.