# Simple Symbols
 Using the JavaScript language, write the function `simpleSymbols(str)` that takes the `str` parameter and determine if it is an acceptable sequence by either returning the string `true` or `false`.

 The `str` parameter will be composed of `+` and `=` symbols with several letters between them and for the string to be true each letter must be surrounded by a `+` symbol.

The string will not be empty and will have at least one letter.

For example:
```js
simpleSymbols("++d+===+c++==a")
// expect to return false
simpleSymbols("++d+===+c++==d")
 // expect to return false
simpleSymbols("++d+===+c++==+a+==")
// // expect to return true
 ```
