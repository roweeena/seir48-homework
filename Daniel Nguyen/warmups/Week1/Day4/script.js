const simonSays = function(string) {
  if (!string) {
    return 'Fine. Be that way!';
  } else if (string[string.length-1] === '?'){
    return 'Sure.';
  } else if (string === string.toUpperCase()) {
    return 'Woah, chill out!';
  } else {
    return 'Whatever.'
  }
}

const TEST_simonSays = function () {
  const tests = ['', 'Hello?', 'HELLO', 'Hello'];
  for (let test of tests) {
    console.log(test, simonSays(test));
  }
}

TEST_simonSays();
