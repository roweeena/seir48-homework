// Create a function that will translate your input to Pig Latin!
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched (it's fine to keep the space between
// punctuation marks and the word). Not case sensitive.
// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"

const translate = function (str) {

      // const myArr = input.split();
      //
      // for(i =0; i<myArr.length ; i++){
      //
      //   let str = input[i];
      //   str = str.substring(1);
      //
      //
      // }
      // return `${str} ${slice(0, 1)} ay`;

      const result = [];
      const array = str.split(' ');

      for(i =0 ;i<array.length; i++){
        if(array[i].includes("!") || array[i].includes("?")){
          result.push(array[i]);
        }else {
          const firstChar = array[i].charAt(0);
          const restOfStr = array[i].substr(1);
          let newWord = restOfStr +firstChar + "ay"
          console.log(`firstChar : ${firstChar}, restOfStr:${restOfStr} ,${newWord}`);
          result.push(newWord);
        }
      }
      return result.join(" ");

};

console.log(translate("Pig Latin is cool !"));
