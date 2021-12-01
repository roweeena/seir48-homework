function binarySearch(heystack, needle){
  let start = 0;
  let end = heystack.length - 1;
  let midpoint = Math.floor((start + end) / 2); // There is a serious bug in this line.

  // while needle is not found AND there are still haystack elements to consider
  while (heystack[midpoint] !== needle && start < end) {
    if (needle < heystack[midpoint]){
      end = midpoint - 1;
    }else {
      start = midpoint + 1;
    }
    midpoint = Math.floor((start + end) / 2);
  }

  // ternary operator
return (needle === heystack[midpoint]) ? midpoint : -1;
};


function recursiveBinarySearch(haystack,
                               needle,
                               start=0,
                               end=haystack.length-1,
                               midpoint=Math.floor((start+end)/2)) {

  console.log(haystack, needle, start, end, midpoint);

  if(haystack[midpoint] === needle) return midpoint; //base case:success
  if (start >= end) return -1; // base case: failure

  if (needle < haystack[midpoint]){
    end = midpoint - 1;
  } else {
    start = midpoint + 1;
  }

  recursiveBinarySearch(haystack, needle, start, end);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
