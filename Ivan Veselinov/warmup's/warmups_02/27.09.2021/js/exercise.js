
// Create a function that will translate your input to Pig Latin!
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched
// (it's fine to keep the space between punctuation marks and the word). Not case sensitive.
// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"

const pigIt = function (str){
  const result = [];
  const array = str.split(` `);

  for (let i = 0; i < array.length ; i++){
    if ( array[i].includes("!") || array[i].includes("?")){
     // if ( array[i] === "!" || array[i] === "?" ){
      result.push(array[i]);
    }else{
      const firstChar = array[i].charAt(0);
      const restStr = array[i].substr(1);
      let newWord = restStr + firstChar + "ay";
      console.log(`firstChar: ${firstChar}, restStr: ${restStr}, ${newWord}`);
        result.push(newWord);
        }
  }
  return result.join(" ");
}

console.log(pigIt("Pig Latin is cool !"));


// const translateL = {
//     a: "Pig Latin is Cool"
// }
//
// const latinTranslate = function(){
//   for (let i = 0; i < translateL.a.length; i ++){
//     // const l = translateL.a.substr(1) + translateL.a[0] + "ay";
//     // }
//     const replace = translateL.a;
//     const array = replace.substr(1,replace.length - 1) + replace.substr(0,3);
//     // array2 = replace.slice(1) + replace.slice(2,3);
//     console.log(array[i]);
//
//   }
// }
//
// latinTranslate();

// igPay atinLay siay oolcay
