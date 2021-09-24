
//## Warmup - Raindrops

//Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// ### Examples
//
// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".


// declare a function
const plingPlang = function(number){

  let result = '';

  if (number % 3 === 0){
    result = 'pling '
  }

  if (number % 5 === 0){
    result = result + 'plang '
  }

  if (number % 7 === 0){
    result = result + 'plong '
  }

  if (result === ''){
    result = number.toString();
  }

  // code will go here
  console.log(result);
}


// call the function with the number 28
plingPlang(28);

// call the function with the number 1755
plingPlang(1755);

// call the function with the number 34
plingPlang(34);
