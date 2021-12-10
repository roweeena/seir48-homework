const cipher = (string, key) => {
  const charCode = []
  for ( i = 0; i<string.length; i++){
    const index = string.charCodeAt(i)
    console.log("index is ", index)
    if (index >= 65 && index <= 90) {
      charCode[i] = 65 + ((index - 65 + key) % 26 )
    } else if ( index >= 97 && index <= 122 ){
      charCode[i] = 97 + ((index - 97 + key) % 26 )
    } else {
      charCode[i] = index
    }
  }
  console.log(charCode)
  return String.fromCharCode(...charCode)
}

console.log(cipher("Ken Done and Drum machines", 4))



const quickCipher = (string, key) => {
  return cryptedString = string.replace(/[a-z]/gi, letter => {
    const charCodeStart = letter < "a" ? 65 : 97;
    return String.fromCharCode((letter.charCodeAt() - charCodeStart + key) % 26 + charCodeStart)
  })
}

console.log(quickCipher("Ken Done and Drum machines", 4))
