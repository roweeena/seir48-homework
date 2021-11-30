const primeFactors = function(n, factors=[]){
  let i = 2;

  while (n > 1) {
    if (n % i === 0) {
      factors.push(i);
      return primeFactors( n / i, factors );
    } else {
      i++
    }
  }

  return factors;
}

const TEST_primeFactors = (limit) => {
  for (let i = 1; i <= limit; i++) {
    console.log( i, primeFactors(i) );
  }
}

TEST_primeFactors(10000);
