const collatz = function (n, count=0) {
  // console.log(n, count);

  if (n === 1) return count;

  if (n % 2 === 0) {
    return collatz(n / 2, count + 1);
  } else {
    return collatz(3 * n + 1, count + 1);
  }
}

const TEST_collatz = (limit) => {
  for (let i = 1; i <= limit; i++) {
    console.log( i, 'took', collatz(i), 'iterations to reach 1' );
  }
}

TEST_collatz(100_000);
