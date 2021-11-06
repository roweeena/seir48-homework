// Take in an array and return an array of the sums of even and odd numbers. For bonus points, use forEach in your solution.
// evenOddSums([50, 60, 60, 45, 71]); => [170, 116]

const array = [50, 60, 60, 45, 71];

const sumOfArray = function() {
sumOdd= 0;
save = 0 ;
for (let i =0; i < array.length; i++){
  if (array[i] % 2 === 0){
    console.log(`Number is Even ${save}`);
    save += array[i];
  }else{
    console.log(`This number is ODD ${sumOdd}`);
    sumOdd += array[i];
    }
  }
    console.log(`The sum of Even array is: `, save);
    console.log(`The sum od ODD array is: `, sumOdd);
}

sumOfArray();
