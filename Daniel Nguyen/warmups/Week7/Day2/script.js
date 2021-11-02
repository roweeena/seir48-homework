const countingValleys = function (sequence) {
  let valleys = 0;
  let altitude = 0;

  for (let i = 0; i < sequence.length; i++) {
    // Calculate altitude after current step
    if (sequence[i] === 'U') {
      altitude++;
    } else if (sequence[i] === 'D') {
      altitude--;
    }

    // We can count a valley if we went UP and are now at sea level
    if (sequence[i] == 'U' && altitude === 0) {
      valleys++;
    }
  }

  return valleys;
}

countingValleys('UDDDUDUU')

const TEST_countingValleys = function (testSequence) {
  const expectation = countingValleys(testSequence) === 1;
  console.log('TEST_countingValleys', testSequence, countingValleys(testSequence), expectation);
}

TEST_countingValleys('UDDDUDUU');
