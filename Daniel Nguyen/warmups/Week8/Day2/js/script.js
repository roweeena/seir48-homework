const formatPhoneNumber = function (phoneNumber) {
  // Remove non-numerals
  const digits = _(phoneNumber).filter((n) => n >= 0);

  let cleanedNumber;
  // If ten digits
  if (digits.length === 10) {
    cleanedNumber = digits.join('');
  }
  // Remove the leading 1 if eleven digits
  else if (digits.length > 10 && digits[0] === '1') {
    cleanedNumber = digits.slice(1).join('');
  }
  // Invalid numbers return ten zeroes
  else {
    cleanedNumber = '0000000000';
  }

  // Format as: '(xxx) xxx-xxxx'
  return (
    [
      '(',
      cleanedNumber.slice(0, 3),
      ') ',
      cleanedNumber.slice(3, 6),
      '-',
      cleanedNumber.slice(6)
    ].join('')
  );
}

const TEST_formatPhoneNumber = function () {
  const tests = [
    { test: '1234567890', expect: '(123) 456-7890' },
    { test: '11234567890', expect: '(123) 456-7890' },
    { test: '123c456F7890!', expect: '(123) 456-7890' },
    { test: '12c45F789!', expect: '(000) 000-0000' },
    { test: '01234567890', expect: '(000) 000-0000' },
  ];

  _(tests).each(function (i) {
    i.result = formatPhoneNumber(i.test),
    i.passed = formatPhoneNumber(i.test) === i.expect
  });

  console.table(tests);
};

TEST_formatPhoneNumber();
