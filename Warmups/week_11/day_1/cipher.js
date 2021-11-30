

// Completed method from 9:45
const cipher = function(string, key){
  const result = []

  //lower casing the string input so we don't have to 
  //worry about upper and lower case letters, which are
  //different indexes in the alphabet
  string = string.toLowerCase();
  const array = Array.from(string);

  for (let i = 0; i < array.length; i++){
    const index = array[i].charCodeAt(0) //get the char code of the current letter
    let newIndex = index + key //add the key to the char code
    
    if (newIndex > 122) {
      newIndex = newIndex - 26 
      //if the new index is greater than 122, 
      //subtract 26 to bring it back to the start 
      //of the alphabet. won't work with key > 26
    }
    if (newIndex === (32 + key)) { //is the symbol a space, which is index of 32
      newIndex = 32;
    }

    result.push(String.fromCharCode(newIndex));
  }

  return result.join('')
}

// Compact version using Dan's % method
const cipher2 = function(string, key){
  const result = []
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++){
    const index = string.charCodeAt(i) //get the char code of the current letter
      result[i] = String.fromCharCode(97 + ((index - 97 + key) % 26 ))
      // 97 is ascii code for lowercase 'a'
      // 26 is the number of letters in the alphabet
      // otherwise, I have no idea why this works
  }

  return result.join('')
}


console.log(cipher("Ken burns and drum machines", 3));
console.log(cipher("Start demo with your readme.md", 2));

console.log(cipher2("React and microsoft", 4));
