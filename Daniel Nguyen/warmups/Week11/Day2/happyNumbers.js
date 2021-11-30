const isHappyNumber = ( n, current=n, memo=[] ) => {
  // Base case 1:
  // if the current number has already been done,
  // we have entered an infinite loop, and thus `n` is not a happy number
  if (memo.includes(current)) {
    return false;
  }

  // Actions: get the sum of the squares of current's digits
  const digits = current.toString().split('').map(Number);
  const squares = digits.map((d) => d * d);
  const sumOfSquares = squares.reduce((a, b) => a + b);

  // Base case 2: return true if we reach 1
  if (sumOfSquares === 1) {
    return true;
  } else {
    // Action: memoise this iteration, so that if it appears again, we will already know that we are recurring
    memo.push(current);
    // Recurring case
    return isHappyNumber(n, sumOfSquares, memo);
  }
};

const happyNumbers = (limit) => {
  for (let i = 1; i <= limit; i++) {
    console.log( i, isHappyNumber(i) );
  }
}

happyNumbers(100_000);
