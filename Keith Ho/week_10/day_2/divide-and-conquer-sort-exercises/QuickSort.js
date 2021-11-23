function quickSort(arr){
  // YOUR CODE HERE
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.pop();
  let arrSmaller = [];
  let arrBigger = [];
  let newArr = [];
  
  for (let i = 0; i < arr.length; i ++){
    arr[i] < pivot ? arrSmaller.push(arr[i]) : arrBigger.push(arr[i]);
  }

  return newArr.concat(quickSort(arrSmaller), pivot, quickSort(arrBigger));
}

module.exports = quickSort;
