
const allergyScore = function(num) {
  const scorecard = {
    128: "cats",
    64: "pollen",
    32: "chocolate",
    16: "tomatoes",
    8: "strawberries",
    4: "shellfish",
    2: "peanuts",
    1: "eggs"
  }

  const allergies = [];

  const scores = Object.keys(scorecard);
  // console.log(scores); // array of keys

  if (num === 0) {
    return 'Good news! No allergies';
  } else {
    // loop through the scores and check if the number is greater than the score => subtract the num
    for (let i = 0; i < scores.length; i++) {
      let score = scores[i];
      if (num >= score) {
        // console.log('num', num);
        // console.log('score', score);
        // console.log('allergy', scorecard[score]);
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
