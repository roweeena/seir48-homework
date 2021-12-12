function bubbleSort(array) {
    let needToIterate = true; // Assume the worst: iterate at least once.

    let end = array.length - 1;

    while (needToIterate) {
      needToIterate = false; //Assume we are done

      for (let i = 0; i < end; i++) {
        if (array[i] > array[i+1]) {
          // const temp = array[i];
          // array[i] = array[i + 1]
          // array[i + 1] = temp;
          //parallel assigment or java destructuring

          [array[i], array[i+1]] = [array[i + 1], array[i]]; //destructuring for parallel assigment
          needToIterate = true;
        }
       }
       end--;
    }
    return array;
}

module.exports = bubbleSort;
// Make some sort of loop that keeps happening if there were any swaps
// that happened this turn

// reset swapHappened to false each time so we can detect if a swap
// happened in this specific iteration.

// Make another loop (inside the first one) to go through one
// round of swapping from the start of the list to the end

// Inside inner loop:
// compare each pair of elements near each other
// swap them if the bigger one was at a lower index.

// Make sure to keep track of whether a swap happened!

// After both loops have exited, remember to return the array
