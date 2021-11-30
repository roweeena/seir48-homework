function quickSort(arr){
  if (arr.length <= 1) return arr;

  const pivot = arr.pop();

  // O(2N) less code, but less efficient
  // const lessThan = arr.filter((element) => element < pivot);
  // const greaterThan = arr.filter((element) => element >= pivot);

  // O(N) more code, but more efficient

  // Split into two smaller arrays
  const lessThan = [];
  const greaterThan = [];
  arr.forEach((element) => {
    if (element < pivot) {
      lessThan.push(element);
    } else {
      greaterThan.push(element);
    }
  });

  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
}

module.exports = quickSort;
