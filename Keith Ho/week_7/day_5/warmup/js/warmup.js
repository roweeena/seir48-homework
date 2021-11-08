
const numbers = function(number){
  if (isNaN(number)){
    return number;
  }

  const numberArr = number.toString().split("");

  let result = "";

  for (let i = 0; i < numberArr.length; i ++){
    if(i === 0 && Number(numberArr[i]) % 2 !== 0){
      if (Number(numberArr[i + 1]) % 2 !== 0){
        result = result + numberArr[i];
      } else {
        result = result + numberArr[i] + "-";
      }
    } else if(i > 0 && i < numberArr.length - 1 && Number(numberArr[i]) % 2 !== 0){
      if (Number(numberArr[i + 1]) % 2 !== 0){
        result = result + "-" + numberArr[i];
      } else {
        result = result + "-" + numberArr[i] + "-";
      }
    } else if(i === numberArr.length - 1 && Number(numberArr[i]) % 2 !== 0){
      result = result + "-" + numberArr[i];
    } else {
      result = result + numberArr[i];
    }
  }
  return result;
};

console.log(numbers(27445545));
console.log(numbers(274));
console.log(numbers(5311));
console.log(numbers(86320));
console.log(numbers(974302));
console.log(numbers(NaN));
console.log(numbers(0));
console.log(numbers(1));
console.log(numbers(28369));
