function bubbleSort(array) {
  let needToIterate = true;

  let end = array.length - 1;

  while (needToIterate){
    needToIterate = false;

    for (let i = 0; i < end; i++){
      if (array[i] > array[i+1]){
        [array[i], array[i+1]] = [array[i+1], array[i]];
        // const temp = array[i];
        // array[i] = array[i+1];
        // array[i+1] = temp;
        needToIterate = true;
      }
    }
    end --;
  }

  return array;
}

module.exports = bubbleSort;
