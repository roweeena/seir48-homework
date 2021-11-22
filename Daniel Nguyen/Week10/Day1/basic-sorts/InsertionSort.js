function insertionSort (items) {
  const iterate = function (i) {
    // Base case: return if the whole array has been iterated through
    if (i === items.length) return;

    // Actions:

    // store the current element
    const current = items[i];

    // Compare the current element and its preceding element
    const loopBack = function (j) {
      // Base cases: return if no insertion swap required
      //  - the current is already greater than the preceding, or
      //  - the current index is 0 (there will be no preceding element to check)
      if (items[j] > items[j - 1] || j === 0) return;

      // Action: swap current and its preceding element
      items[j] = items[j - 1];
      items[j - 1] = current;

      // Recursive case: move to next previous element
      loopBack(j - 1);
    }
    loopBack(i);

    // Recursive case: move on to the next element
    iterate(i + 1);
  }
  // Check each element, starting at the second, because the first will have no preceding elements to check against
  iterate(1);
  return items;
}

module.exports = insertionSort;
