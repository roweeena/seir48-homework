//console.log('Connected!')

//# Allergies Warmup

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

const eggs = 1;
const peanuts = 2;
const shellfish = 4;
const strawberries = 8;
const tomatoes = 16;
const chocolate = 32;
const pollen = 64;
const cats = 128;

// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
// If Mary has a score of 17, she must be allergic to tomatoes and eggs, but not peanuts or shellfish.

//  ✅️  Now, given just that score of 34, your program should be able to say:

// -  ✅️ Whether Tom is allergic to any one of those allergens listed above.
// -  ✅️ All the allergens Tom is allergic to.

const allergies = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
}
const checkAllergy = function(number) {

    if (number <= 0 || number >= 256){
        console.log('No allergies.');
        return false;
    }    
     //   const values = Objects.keys(scorecard);
    console.log('Tom has the following allergies: ')
        for (let i = 0; i < Object.keys(allergies).length; i++){
            if (number & Object.keys(allergies)[i]) {
                console.log(Object.values(allergies)[i]);
            }
        }

// return the list of things person is allergic to
    return allergies;
}

console.log(checkAllergy(12));
console.log(checkAllergy(34));
console.log(checkAllergy(17));
// Done - ✅️ 
// Not done - ❌️