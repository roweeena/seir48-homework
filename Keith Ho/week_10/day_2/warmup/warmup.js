const isPrimeNumber = function(number){
  let count = 0;

  for (let i = 1; i < number; i++){
    if (number > 1 && number % i === 0){
      count ++;
    }
  }

  if (count === 1){
    return true;
  } else {
    return false;
  }
};

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(5));


const primeFactors = function(number, primeNumArry = []) {
  // let i = 2;
  //
  // while (number > 1){
  //   if (isPrimeNumber(i) && number % i === 0){
  //     primeNumArry.push(i);
  //     number = number / i;
  //     return primeFactors(number, primeNumArry);
  //   } else {
  //     i ++;
  //   }
  // }

  for (let i = 2; i <= number; i ++) {
    if (isPrimeNumber(i) && number % i === 0 && number > 1){
      primeNumArry.push(i);
      number = number / i;
      return primeFactors(number, primeNumArry);
    }
  }
  return primeNumArry;
};

console.log(primeFactors(60));
