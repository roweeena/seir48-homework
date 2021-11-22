function bubbleSort(array) {
  let swapHappened = true;

  const loop = function () {
    // Base case: if no swap happened on the last loop, then the array is sorted
    if (!swapHappened) return;

    // Actions:

    // Reset to false, in order to track any swaps for the current iteration
    swapHappened = false;
    // Iterate through each adjacent pair (a bubble) in the array
    const checkBubble = function (i) {
      // Base case: return once all adjacent pairs have been checked
      if (i === array.length - 1) return;

      // Action:
      // Check the current element and the next element
      // If the current element is larger than the next, then swap them
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
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
