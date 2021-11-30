
const conjecture = function(number) {
  let count = 0;
  while (number > 1){
    if (number % 2 === 0){
      number = number / 2;
    } else if (number % 2 !== 0){
      number = number * 3 + 1;
    }

    count ++;
    console.log(number, count);
  }
  console.log(count);
}

console.log(conjecture(12));
