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

console.log("Good Morning");
const factoriel = function (a){
  if ( a % 3 === 0) {
    console.log(`Pling ${a}`);
  }else if ( a % 5 === 0) {
      console.log(`Plang ${a}`);
  }else if ( a % 7 === 0) {
    console.log(`Plong ${a}`);
  // }else if( a % 3 === 0 && a % 5 === 0){
  //   console.log(`PlingPlang ${a}`);
  // }else if( a % 3 === 0 && a % 7 === 0){
  //   console.log(`PlingPlong ${a}`);
  //
}else{
 console.log(`Your number is ${a}`);
}
};
factoriel(28);
factoriel(1755);
factoriel(34);
