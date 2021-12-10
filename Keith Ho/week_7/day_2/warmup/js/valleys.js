console.log("work");

const countingValleys = function(str) {
  let seaLevel = 0;
  let count = 0;

  str.split("").forEach(function(element){
    if(element === "U"){
      seaLevel ++;
    } else if (element === "D") {
      if (seaLevel === 0){
        count ++;
      }
      seaLevel --;
    }
  });

  return count;
};

console.log(countingValleys("UDDDUDUU"));;
console.log(countingValleys("DUUDDDU"));;
