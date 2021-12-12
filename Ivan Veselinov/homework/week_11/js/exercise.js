// # Caesar's Cipher
//
// Julius Caesar protected his confidential information by encrypting it using a cipher.
// Caesar's cipher shifts each letter by a number of letters.
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
// In the case of a rotation by 3: a, b, c, and d would map to d, e, f and g.
//
// Create a function that takes a string and an integer (the rotation factor).
// It should return an encrypted string.

 const cipher = function (string, key){
   const result = []

  const characters = Array.from(string);
  console.log('This is characters array', characters);
   //'Ken done and drum machines'
   //convert the string into an array.
   //'K','e','n' ......
   for (let i=0; i < characters.length; i++){

     const letterIndex = (characters[i].charCodeAt(0));
     const newIndex = letterIndex + key;

        if ( letterIndex > (122 - key)) {

        }
        let newLetter = String.fromCharCode(newIndex)
        result.push(newletter);

   }
  console.log("result is", String.fromCharCode(result));
 }

cipher('Joel is great', 2);




// ---------------------
// Example
// ```javascript
// cipher("Joel is great!!!", 3)
// ```
// should return `"Mrho lv juhdw!!!"`
//
// ---------------------
// Bonus
//
// Create a function to decrypt a string with the key
//
// Create another function to bruteforce the solution
//
// ---------------------
// Hints
//
// [https://cryptii.com/pipes/caesar-cipher](https://cryptii.com/pipes/caesar-cipher)
//
// [Caesar Cipher on Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)
//
// If you want to use arrays you can use:
// javascript
// letters = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ]
// capitalLetters = [
//   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
//   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
// ]
