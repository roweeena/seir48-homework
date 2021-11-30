// # Wordy Calculator
//
// Create code in Ruby or Javascript that takes word problems in the following formats:
//
// > What is 5 plus 13?
//
// > What is 7 minus 5?
//
// > What is -6 multiplied by 4?
//
// > What is 25 divided by -5?
//
// and returns the answer as an integer.
//
//
//
// To do this, you should define a calculator which has an answer method to return the answer.
// Eg. `const query1 = calculation("What is 10 plus 4?");` or `const query1 = new Calculation("What is 10 plus 4?");`
// Then `query1.answer();` to get your result.
//
// You may want to refer back to [this page from gitbook if working in Javascript](https://sei48tas.gitbook.io/sei48/week-1/day-5-advance-objects-and-function
// ), or [this page if in Ruby](https://sei48tas.gitbook.io/sei48/week4/day-5-activerecord)
//
// Use a regular expression to parse the question.

const calculation = function(string){
  let result;
  const numbers = string.match(/-?\d+/g).map(Number);

  if (string.includes("plus")){
    result = Number(numbers[0]) + Number(numbers[1]);
  } else if (string.includes("minus")){
    result = Number(numbers[0]) - Number(numbers[1]);
  } else if (string.includes("multiplied")){
    result = Number(numbers[0]) * Number(numbers[1]);
  } else if (string.includes("divided")){
    result = Number(numbers[0]) / Number(numbers[1]);
  } else {
    result = "invalid question!";
  }

  return result;
}

console.log(calculation("What is 5 plus 13?"));
console.log(calculation("What is 7 minus 5?"));
console.log(calculation("What is -6 multiplied by 4?"));
console.log(calculation("What is 25 divided by -5?"));

class Calculation {

    constructor(sum) {
        this.sum = sum.replace(/plus/g, "+")
                .replace(/minus/g, "-")
                .replace(/times/g, "*")
                .replace(/divided/g, "/")
                .replace(/[A-Za-z\?]+/g, "");
    }

    answer() {
      console.log("about to evaluate: ", this.sum);
      const regex = new RegExp(/[0-9x+*/-]+/, 'gm')
      const maths = this.sum.match(regex).join('')
      return eval(maths);
    }
}


const additionQuery = new Calculation("10 plus 4?");
const subtractionQuery = new Calculation("10 minus 4?");
const multiplyQuery = new Calculation("10 times 4?");
const divideQuery = new Calculation("10 divided 4?");

console.log(
  additionQuery.answer(),
  subtractionQuery.answer(),
  multiplyQuery.answer(),
  divideQuery.answer(),
);
