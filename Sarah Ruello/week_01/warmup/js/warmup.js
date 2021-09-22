function raindrop(input) {
  let string = "";
  // concatenate onto string
  if (input % 3 == 0) {
    string += "Pling";
  }
  if (input % 5 == 0) {
    string += "Plang";
  }
  if (input % 7 == 0) {
    string += "Plong";
  }
  // return as a conditional statement:
  return string || input.toString();
}

console.log(raindrop(28));
console.log(raindrop(34));
console.log(raindrop(1755));
