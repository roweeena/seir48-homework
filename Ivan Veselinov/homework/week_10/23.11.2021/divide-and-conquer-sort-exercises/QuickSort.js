function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const pivot = arr.pop(); // .shift();

  // O(2N) less code more iteration :
  const lessThen = arr.filter(element => element < pivot);
  const greaterThen = arr.filter(element => element >= pivot);

  // // O(N) more code more offician
  //
  // const lessThen = [];
  // const greaterThen = [];
  //
  // arr.forEach((element) => {
  //   if (element < pivot) {
  //     lessThen.push(element);
  //   } else {
  //     greaterThen.push(element);
  //   }
  // });

  return [...quickSort(lessThen), pivot, ...quickSort(greaterThen)];
}

module.exports = quickSort;
