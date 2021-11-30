function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let first = 0;
    let last = arr.length - 1;
    let index = -1;
    let found = false;
    let half;

    while (found === false && first <= last){
      half = Math.floor((first + last) / 2);
      if (arr[half] === element){
        found = true;
        index = half;
      } else if (arr[half] < element){
        first = half + 1;
      } else {
        last = half - 1;
      }
    }
    return index;
    // return arr.indexOf(element);
}

function recursiveBinarySearch(arr, element, index = 0){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
  const half = Math.floor(arr.length / 2);

  if (arr[half] === element){
    return half + index;
  } else if (arr[half] < element && arr.length > 1){
    index = index + half;
    return recursiveBinarySearch(arr.splice(half, arr[arr.length]), element, index);
  } else if (arr[half] > element && arr.length > 1){
    return recursiveBinarySearch(arr.splice(0, half), element, index);
  } else {
    return -1;
  }

}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
