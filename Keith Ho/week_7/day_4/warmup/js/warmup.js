
const recurringLetter = function(sentence){
  let letterNums = _(sentence).countBy();

  letterNums = _(letterNums).omit(" ");
  console.log(letterNums);

  const maxScore = _(letterNums).max();
  console.log(maxScore);

  let maxLetter = "";

  _(letterNums).map((value, letter)=>{
    if(value === maxScore){
      maxLetter = letter;
      console.log(maxLetter);
    }
  });
  return maxLetter;
};

console.log(recurringLetter("just a simple sentence chilling"));

const capitaliseLetter = function(string, letter){
  let result = _(string).map( c => {
    if(c === letter){
      return c.toUpperCase();
    } else {
      return c;
    }
  })
  return result.join("");
}

console.log(capitaliseLetter('just a simple sentence chilling', 'e'));
