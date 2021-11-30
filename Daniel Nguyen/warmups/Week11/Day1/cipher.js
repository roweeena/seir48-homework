const cipher = (string, rotation) => {
  const chars = string.split('');

  const rotateChar = (char) => {
    let charCode = char.charCodeAt(0);

    if (/[A-Z]/.test(char)) {
      charCode = (charCode + rotation - 65) % 26 + 65;
    } else if (/[a-z]/.test(char)) {
      charCode = (charCode + rotation - 97) % 26 + 97;
    } else {
      return char;
    }

    return String.fromCharCode(charCode);
  }

  return chars.map(rotateChar).join('');
};

console.log(
  cipher( 'Joel is great!!!', 3 ),
  cipher( 'Joel is great!!!', 3 ) === 'Mrho lv juhdw!!!'
);
