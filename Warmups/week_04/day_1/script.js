const allergyScore = function(num) {
  const scorecard = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  }

  const allergies = [];

  const scores = Object.keys(scorecard);
  // console.log(scores); // array of keys

  if (num === 0) {
    return 'Good news! No allergies';
  } else {
    // loop through the scores and check if the number is greater than the score => subtract the num
    for (let i = scores.length - 1; i >= 0; i--) {
      let score = scores[i];
      if (num >= score) {
        allergies.push(scorecard[score]);
        num -= scores[i];
      }
    }
  }
  return `Here is the list of allergies: ${allergies.join(', ')}`;
}

console.log(allergyScore(12));
console.log(allergyScore(34));
console.log(allergyScore(17));
