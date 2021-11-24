function mergeSort(arr) {
  // YOUR CODE HERE

  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
