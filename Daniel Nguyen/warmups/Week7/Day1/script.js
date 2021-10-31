const reverse = function (array) {
  return array.reverse();
}

console.log(
  reverse(
    [1, 2, 3, 4]
  )
);

const flatten = function (array) {
  return array.join().split(',');
}


console.log(
  flatten(
    ["Hello", ["World", 42] ]
  )
);

console.log(
  flatten(
    ["Hello", [[["World"]]]]
  )
);
