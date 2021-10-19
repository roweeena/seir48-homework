// # Allergies Warmup

// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)

// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
// If Mary has a score of 17, she must be allergic to tomatoes and eggs, but not peanuts or shellfish.

// Now, given just that score of 34, your program should be able to say:

// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.

const scorecard =
{
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
}

const tomScore = 34;

const getPersonsAllergies = function(allergyScore)
{
    let allergyList = [];

    if(allergyScore === 0)
    {
        return("Tom's allergies are not detected.");
    }
    else
    {
        const values = Object.keys(scorecard);

        for (let i = values.length -1; i >= 0; i--) 
        {
            if(allergyScore >= values[i])
            {
                allergyList.push(scorecard[i]);
                allergyScore -= values[i];
            }
        }
    }
    return allergyList;
}

console.log(getPersonsAllergies(34));
console.log('This doesnt work')