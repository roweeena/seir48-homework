const sumOf = function () {
  let sum = 0;
  for (let arg of arguments) {
    sum += Number(arg) || arg.reduce((a,b) => a + b);
  }
  return sum;
}

const a = [2, 6.4, 3];
const b = [3, 3.6, 2];
const c = [4.1, 5, 0.9];
const d = 10;
const e = 5.5;

console.log( sumOf(a, b, c, d, e) );   // 45.5
