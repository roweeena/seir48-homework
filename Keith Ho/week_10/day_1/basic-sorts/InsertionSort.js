function insertionSort (items) {
  // Loop through each element
  for (let i = 0; i < items.length; i ++){
    const item = items[i];

    for (let n = i - 1; n >= 0 && items[n] > item; n --){
      items[n + 1] = items[n];
    }
    items[n + 1] = item;
  }

  // store the current item value so it can be placed correctly
  // in the sorted portion of the array

  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with

  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)

  // We can now insert the item in its sorted location

  // Remember to return the list!
  return items;
}

module.exports = insertionSort;
