
// starting from 2, check if num is % i
  // if true, i is a factor, add to factors
  // num / i
  // go back to line 7

// else - i++
  //go back to line 7

const recPrimeFactors = function(num, factors=[]){
  let i = 2;
  while ( num > 1 ){
    if ( num % i === 0 ){
      console.log(` ${i} is a factor of ${num}`);
      factors.push(i);
      num = num / i
      return recPrimeFactors(num, factors);
    } else {
      console.log(` ${i} is not a factor of ${num}`);
      i++
    }
  }
  return factors
}

console.log(recPrimeFactors(60));
// 2 2 3 5


const primeFactors = function(num){

  let factors = [];

  let i = 2;

  while ( num > 1 ){
    if ( num % i === 0 ){
      console.log(` ${i} is a factor of ${num}`);
      factors.push(i);
      num = num / i
    } else {
      console.log(` ${i} is not a factor of ${num}`);
      i++
    }
  }

  return factors

}

console.log(primeFactors(60));
// 2 2 3 5
