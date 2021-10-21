# Mumble
Write a function called mumble that accepts a single string argument:
 - The function should return a string that has each character repeated the number of times according to its position within the string argument.
 Additionally, each repeated section of characters should be separated by a hyphen (-).

Examples describe it best:
 ```javascript
 mumble('X'); //=> 'X'
 mumble('abc'); //=> 'a-bb-ccc'
 mumble('121'); //=> '1-22-111'
 mumble('!A 2'); //=> '!-AA-   -2222'
```

## Bonus
Capitalise the first character e.g. mumble('abc'); //=> 'A-Bb-Ccc'
