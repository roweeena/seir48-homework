console.log("working");

const reverse = function (arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i -- ){
    result.push(arr[i]);
  }

  return result;
};

reverse([1,2,3,4]);

const flatten = function (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i ++) {
    if( Array.isArray(arr[i])){
      for (let n = 0; n < arr[i].length; n ++) {
        result.push(arr[i][n]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

flatten(["Hello", ["World", 42] ]);
