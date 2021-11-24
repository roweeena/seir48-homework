function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

function recursiveBinarySearch(arr, element, low=0, high=arr.length-1,){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    if (low > high) {
      return -1;
    }

    let mid = Math.floor((low + high) / 2);

    const left = arr.slice(low, mid);
    const right = arr.slice(mid);

    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      return recursiveBinarySearch(arr, element, low, mid-1);
    } else {
      return recursiveBinarySearch(arr, element, mid+1, high);
    }
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
