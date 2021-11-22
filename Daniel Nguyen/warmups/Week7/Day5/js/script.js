const dashatize = function (n) {
  const digits = _(n.toString()).map();

  let dashatized = '';

  _(digits).each(function (d) {
    if (d & 1) {
      dashatized += `-${d}-`;
    } else {
      dashatized += d;
    }
  });

  return cleanUp(dashatized);
}

// Removes double dashes and dashes at the beginning or end of a string
const cleanUp = function (string) {
  string = string.replaceAll('--', '-');

  if (string.startsWith('-')) {
    string = string.slice(1);
  }

  if (string.endsWith('-')) {
    string = string.slice(0, -1);
  }

  return string;
}

const TEST_dashatize = function () {
  const tests = [
    { test: 274, expect: '2-7-4', result: null, passed: false },
    { test: 5311, expect: "5-3-1-1", result: null, passed: false },
    { test: 86320, expect: "86-3-20", result: null, passed: false },
    { test: 974302, expect: "9-7-4-3-02", result: null, passed: false },
    { test: NaN, expect: "NaN", result: null, passed: false },
    { test: 0, expect: "0", result: null, passed: false },
    { test: -1, expect: "1", result: null, passed: false },
    { test: -28369, expect: "28-3-6-9", result: null, passed: false }
  ];

  _(tests).each(function (i) {
    i.result = dashatize(i.test),
    i.passed = dashatize(i.test) === i.expect
  });

  console.table(tests);
}

TEST_dashatize();
