const allAllergies = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
}

// Returns a patient's allergies when given an allergy score.
const getPatientAllergies = function (patientScore) {
  const allergies = [];
  for (let i = Object.keys(allAllergies).length - 1; i >= 0; i--) {
    const allergy = Object.keys(allAllergies)[i];
    const score = allAllergies[Object.keys(allAllergies)[i]];
    if (patientScore >= score) {
      allergies.push(allergy);
      patientScore -= score;
    }
  }
  return allergies;
}

console.log(getPatientAllergies(12));
console.log(getPatientAllergies(17));
console.log(getPatientAllergies(34));
