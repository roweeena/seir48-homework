
const dashatize = function(numbers){

  if(isNaN(numbers)){
    return numbers;
  }

  let numArray = numbers.toString().split('');
  console.log(numArray);

  let result = ''

  for (let i = 0; i < numArray.length; i++){
    if ( Number(numArray[i]) % 2 !== 0){
      //add our dash here
      result += `- ${numArray[i]} -`
      //add numArray[i] to result
      result += numArray[i];
      //add our dash here
      result += '-'
    } else {
      //add numArray[i] to result
      result += numArray[i];
    }
  }

  //
  result = result.replace(/--/g, '-');

  if(result.startsWith('-')){
    result = result.substr(1);
  }

  if(result.endsWith('-')){
    result = result.substr(0, result.length - 1);
  }

  return result;
}

// 274
// "274"
// .split '' ->
// ['2','7','4'];

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
console.log(dashatize('pony'));
