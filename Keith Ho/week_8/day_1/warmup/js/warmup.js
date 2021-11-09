
const pairwise = function(arr, num){
  let pairsArr = [];
  let indexPairsArr = [];
  let pairSum = 0;

  for (let i = 0; i < arr.length; i ++){
    for (let n = 0; n < arr.length; n ++){
      if (i !== n && i < n && arr[i] + arr[n] === num){
        let pairArr = [arr[i], arr[n]];
        pairsArr.push(pairArr);
        let indexPairArr = [i, n];
        indexPairsArr.push(indexPairArr);
      }
    }
  }

  for (let i = 0; i < pairsArr.length; i ++){
    for (let n = 0; n < pairsArr.length; n ++){
      if (i !== n && i < n && pairsArr[i][0] === pairsArr[n][0] && pairsArr[i][1] === pairsArr[n][1]){
        pairsArr.splice(n, 1);
        indexPairsArr.splice(n, 1);
      }
    }
  }

  console.log(pairsArr);
  console.log(indexPairsArr);

  for (let i = 0; i < indexPairsArr.length; i ++){
    pairSum = pairSum + indexPairsArr[i][0] + indexPairsArr[i][1];
  }

  return pairSum;
};

console.log(pairwise([7, 9, 11, 13, 15], 20));
console.log(pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10));
