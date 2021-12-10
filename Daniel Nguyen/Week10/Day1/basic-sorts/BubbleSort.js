function bubbleSort(array) {
  // Loop will only start if true. Will be reset to false immediately.
  let swapHappened = true;

  const loop = function () {
    // Base case: if no swap happened on the last loop, then the array is sorted
    if (!swapHappened) return;

    // Actions:

    // reset to false, in order to track any swaps for the current iteration
    swapHappened = false;

    // iterate through each adjacent pair (a bubble) in the array
    const checkBubble = function (i) {
      // Base case: return once all adjacent pairs have been checked
      if (i === array.length - 1) return;

      // Action:
      // check the current element and the next element
      // if the current element is larger than the next, then swap them
      if (array[i] > array[i + 1]) {
        // Destructuring for parallel assignment
        [ array[i], array[i + 1] ] = [ array[i + 1], array[i] ];
        swapHappened = true;
      }

      // Recursive case
      checkBubble(i + 1);
    }
    checkBubble(0);

    // Recursive case
    loop();
  }
  loop();
  return array;
}

module.exports = bubbleSort;
