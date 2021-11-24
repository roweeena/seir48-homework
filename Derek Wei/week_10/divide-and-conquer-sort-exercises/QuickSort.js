function quickSort(arr){
  // YOUR CODE HERE

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.pop();

  // O(2N) less code
  const left = arr.filter(e => e < pivot);
  const right = arr.filter(e => e >= pivot);

  // O(N) more code
  // const left = [];
  // const right = [];
  //
  // arr.forEach( (e) => {
  //   return e <= pivot ? left.push(e) : right.push(e)
  // });

  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = quickSort;
