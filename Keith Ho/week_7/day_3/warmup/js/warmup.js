// # Even and Odd sums
//
// Take in an array and return an array of the sums of even and odd numbers.
// For bonus points, use forEach in your solution
//
// evenOddSums([50, 60, 60, 45, 71]);
// => [170, 116]

const evenOddSums = function(arr){
  // let result = [];
  let evenSums = 0;
  let oddSums = 0;

  arr.forEach(n => {
    if (n % 2 === 0){
      evenSums = evenSums + n;
    } else {
      oddSums = oddSums + n;
    }
  });

  // result.push(evenSums);
  // result.push(oddSums);
  //
  // return result;
  return [evenSums, oddSums];
};

console.log(evenOddSums([50, 60, 60, 45, 71]));
console.log(evenOddSums([1, 11, 111, 2, 22, 222]));
