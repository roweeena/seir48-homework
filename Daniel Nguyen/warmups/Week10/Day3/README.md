# Isogram Finder

An isogram is a word which has no repeating characters anywhere in the word. For example the string "isogram" is an isogram, however the string "is isogram", is not an isogram (2 i's and 2 s's).

- There must be no repeating letters anywhere in the string.

- The strings are case insensitive. Different Cased letters are still counted.

```js
isIsogram("Dermatoglyphics") // true
isIsogram("isogram") // true
isIsogram("aba") //false
isIsogram("moOse") // false,
isIsogram("isIsogram") // false
isIsogram("") // true
```
Write a program that when given a string will detect if the string is or is not an isogram. Shortest program wins.
