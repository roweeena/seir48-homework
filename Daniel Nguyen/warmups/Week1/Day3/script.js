const raindrops = function (number) {
  let output = '';
  if (number !== 0) {
    if (number % 3 === 0) output += 'Pling';
    if (number % 5 === 0) output += 'Plang';
    if (number % 7 === 0) output += 'Plong';
  }
  if (output === '') output += number;
  return output;
}

// Tests all numbers from 0 to 105
for (let n = 0; n < 106; n++) {
  console.log(i, raindrops(i));
}
