


const evenOddSums = function(arr){
  // console.log(arr)
  let evenSum = 0;
  let oddSum = 0;

  // if statement - odd or even?
  arr.forEach(number => {
    if (number % 2 === 0) {
      evenSum += number;
    } else{
      oddSum += number;
    };
  });
  return [evenSum, oddSum]
}


console.log(evenOddSums([1,2,3,4,5]));
