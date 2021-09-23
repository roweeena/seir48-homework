// ## Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5 or 7 as a factor, output the number as a string.
//
//
// ### Examples
//
// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".


const raindrops = (num) => {

  let result = "";

  if (num % 3 === 0) {
    result = result.concat("Pling");  // can replace with - result += "Pling"
  }
  if (num % 5 === 0) {
    result = result.concat("Plang");
  }
  if (num % 7 === 0) {
    result = result.concat("Plong");
  }
  if (!(num % 3 === 0 || num % 5 === 0 || num % 7 === 0)) {   // can replace with - if (result === "")
    result = num.toString();
  }

  console.log(result);
  return result;
}

raindrops(9); // contains 3 as a factor
raindrops(10); // contains 5 as a factor
raindrops(14); // contains 7 as a factor
raindrops(15); // contains 3 and 5 as factors
raindrops(21); // contains 3 and 7 as factors
raindrops(35); // contains 5 and 7 as factors
raindrops(105); // contains 3, 5 and 7 as factors
raindrops(34); // does not contain 3, 5 or 7 as factors

raindrops(10231241);
raindrops(1023213);
raindrops(8579947);
raindrops(2.5);
