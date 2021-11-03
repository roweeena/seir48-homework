// # Even and Odd sums
//
// Take in an array and return an array of the sums of even and odd numbers.
// For bonus points, use forEach in your solution
//
// evenOddSums([50, 60, 60, 45, 71]); => [170, 116]

const evenOddSums = function(array) {

  let sums = [0, 0];

  array.forEach(n => {
    if (n % 2 === 0) {
      sums[0] += n;
    } else {
      sums[1] += n;
    }
  });
  return sums
}

console.log(evenOddSums([50, 60, 60, 45, 71]));
console.log(evenOddSums([1, 2, 3, 4, 5, 6]));
console.log(evenOddSums([200, 300, 200, 21, 23, 500]));
