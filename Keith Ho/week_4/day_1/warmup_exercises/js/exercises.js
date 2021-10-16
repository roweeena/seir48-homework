
// const scorecard = [
//   [1, "eggs",
//   [2, "peanuts"],
//   [4, "shellfish"],
//   [8, "strawberries"],
//   [16, "tomatoes"],
//   [32, "chocolate"],
//   [64, "pollen"],
//   [128, "cats"]
// ];

const scorecard = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
};

// const allergyTest = function(score){
//   for(let i = 0; i < scorecard.length; i++){
//     for(let n = 0; n < scorecard.length; n++){
//       if(scorecard[i][0] + scorecard[n][0] === score){
//         console.log(`Your allergens are: ${scorecard[i][1]} and ${scorecard[n][1]}`);
//       } else {
//         console.log("You don't have any allergens.");
//       }
//     }
//   }
// };

const allergyTest = function(score){
  let allergyList = [];
  const values = Object.keys(scorecard);

  if (score === 0){
    return ("All good, no allergens.");
  } else {

    for (let i = values.length - 1; i >=0; i--){
      if (score >= values[i]){
        allergyList.push(scorecard[values[i]]);
        score -= values[i];
      }
    }
  }
  return allergyList.join(", ");
}

console.log(allergyTest(33));
