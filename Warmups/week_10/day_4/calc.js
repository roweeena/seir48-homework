
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
