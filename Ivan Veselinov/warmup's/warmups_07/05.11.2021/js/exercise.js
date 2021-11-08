//
// Given a number, return a string with dash '-' marks before and after each odd integer, but do not begin or end the string with a dash mark.
//
// -----------------
// Tests:
//
// dashatize(274), "2-7-4", "Should return 2-7-4");
//
// dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
//
// dashatize(86320), "86-3-20", "Should return 86-3-20");
//
// dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
//
// dashatize(NaN), "NaN", "Should return NaN");
//
// dashatize(0), "0", "Should return 0");
//
// dashatize(-1), "1", "Should return 1");
//
// dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");

// function dashatize(num) {
//    let numP = Math.abs(num) + '';
//   let result = [numP[0]];
//
//   if ( numP > 0 ){
//     for (let i =0; i < numP.length; i++){
//       result.push('-',numP[i]);
//     }
//     return result.join('');
//   }
//   return numP;
// }
//
// console.log(dashatize(274));
// console.log(dashatize(5311));
// console.log(dashatize(86320));
// console.log(dashatize(974302));
// console.log(dashatize(NaN));
// console.log(dashatize(0));
// console.log(dashatize(-1));
// console.log(dashatize(-28369));


// PAT SOLUTION

const dashatize = function (numbers){

  if ( isNaN(numbers)){
    return numbers;
  }

  let result = 0;

  let numArray = numbers.toString().split(''); // to use split method we have to do it string
  console.log(numArray); // to see if numbers are strings!!!

  for (let i = 0; i < numArray.lenth; i++){
   if ( Number(numArray[i]) % 2 !== 0 ){ //ODD
     //add out dashes here
     result += '-';
     // add numarray[i] to result
     console.log('is odd');
     //add out dash here
     result += '-';
   }else{
   //add numArray[i] to result
     console.log('is even');
     result += numArray[i];
  }
}
      // THIS PART IS NOT WORKING I SHOULD CHECK WHY!!

  // result = result.replace(/--/g, '-');
  //
  // if(result.startsWith('-')){
  //   result = result.substr(1); //from 1 to end
  // }
  //
  // if(result.startsWith('-')){
  //   result = result.substr(0, result.length - 1); //from 0 to end
  // }

  return result;
}




console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
