//
//  Sum of arrays
// // Write a function that receives two arguments, both of which are Arrays and sums them.
// These arrays contain only numbers.
// You don't know their length and they can contain both integers and floating point numbers.
// //
// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20

const array1 = [3, 6.4, 3];
const array2 = [3, 3.6, 2];

const sumArr = function(){
    let sum = 0;

    for (let i = 0; i < array1.length; i++){
      sum = sum + array1[i];
    }
  for (let j =0; j < array2.length; j++){
    sum = sum + array1[j];
 }



console.log(sum);
}

sumArr();



const sumArr = function(arr1,arr2){
    let sum = 0;

    for (let i = 0; i < arr1.length; i++){
      sum = sum + arr1[i];
    }
  for (let j =0; j < arr2.length; j++){
    sum = sum + arr2[j];
 }



console.log(sum);
}

sumArr([1,2,3], [3,4,5]);
