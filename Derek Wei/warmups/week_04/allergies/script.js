// # Allergies Warmup
//
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)
//
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
// If Mary has a score of 17, she must be allergic to tomatoes and eggs, but not peanuts or shellfish.
//
// Now, given just that score of 34, your program should be able to say:
//
// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.
//
// scorecard:
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats"

const allergens = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
}

const allergyCheck = function(score) {

  if (score <= 0 || score >= 256) {
    console.log('No allergies.');
    return false;
  }

  console.log('Allergies detected:');
  for (let i = 0; i < Object.keys(allergens).length; i++) {
    if (score & Object.keys(allergens)[i]) {
      console.log(Object.values(allergens)[i]);
    }
  }
  return true;
}

allergyCheck(4); // shellfish
allergyCheck(7); // eggs, peanuts, shellfish
allergyCheck(17); // tomatoes, eggs
allergyCheck(34); // peanuts, chocolate
allergyCheck(131); // cats, eggs, peanuts
allergyCheck(-1); // No allergies
allergyCheck(300); // No allergies
