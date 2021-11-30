//  search through the array non-recursively for the element
//  if the element is not found, return -1
//  if the element is found, return the index at which it was found
function binarySearch (haystack, needle) {
  let start = 0;
  let end = haystack.length - 1;
  let midpoint = Math.floor((start + end) / 2);

  // While the needle is not found AND there are still haystack elements to consider
  while (haystack[midpoint] !== needle && start < end) {
    if (needle < haystack[midpoint]) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
    midpoint = Math.floor((start + end) / 2);
  }

  return needle === haystack[midpoint] ? midpoint : -1;
}

//  search through the array recursively for the element
//  you may need to add more parameters to this function!
//  if the element is not found, return -1
//  if the element is found, return the index at which it was found
function recursiveBinarySearch (arr,
                                element,
                                start = 0,
                                end = arr.length - 1,
                                midpoint = Math.floor( (start + end) / 2 ) ) {
  // Base cases
  if (arr[midpoint] === element) return midpoint;
  if (start >= end) return -1;

  if (element < arr[midpoint]) {
    end = midpoint - 1;
  } else {
    start = midpoint + 1;
  }

  return recursiveBinarySearch(arr, element, start, end);
}

module.exports = {
  binarySearch,
  recursiveBinarySearch
}
