const isLeapYear = function(year) {
  const divisibleBy = (divisor) => (year % divisor === 0);
  const isLeapYear = divisibleBy(4) && (!divisibleBy(100) || divisibleBy(400));
  return isLeapYear;
}


const TEST_isLeapYear = function() {
  const leapYears = [];
  for (let i = 1800; i <= 2022; i++) {
    isLeapYear(i) && leapYears.push(i);
  }
  console.log(leapYears.join("\n"));
}

TEST_isLeapYear();
