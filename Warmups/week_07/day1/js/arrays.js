// ----------------------------
// reverse an array
const reverse = function(array){
  let reversedArray = []

  // loop through the array, push 'i' to reversedArray[]
  for (let i = array.length - 1; i >=0; i-- ){
    // console.log("i is equal to " + i )
    // console.log("i of the array is " + array[i])
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

// console.log(reverse([1,2,3,4]));
// [1,2,3,[4,5]]
// [1,2,3,4,5]


// ----------------------------
// flattern an array
// solution from the warmup demo
const flattern = function(array){
  //create an empty array for flattened
  let flatArray = [];

  //loop through and grab the elements
  array.forEach(
    function(element){
      console.log('Elements:' + element)

      // is this element an array?
      if(Array.isArray(element)){
        // if it is, loop through it and push each
        // child to flatArray
        element.forEach(function(element){
          flatArray.push(element);
        })
      } else{
        // if it isn't an array, just push it to flatArray
        flatArray.push(element);
      }
    });
  return flatArray;
};

console.log(flattern([1,2,3,[4,5]]));



// ----------------------------
// flattern an array
// other solution using concat that I couldn't figure out live

const flattenAlt = function(array){

  let flattenedArr = []

  array.forEach(function(element){
    console.log(`Elements: ${element}`);

    if(Array.isArray(element)){
      // take flattenedArr, concat it with 'element'
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
      flattenedArr = flattenedArr.concat(element);
      console.log(`flattenedArr: ${flattenedArr}`);
    } else {
      flattenedArr.push(element);
    }
  });

  return flattenedArr;
};

console.log(flatternAlt([1,2,3,[4,5]]));



// ----------------------------
// flattern an array
// bonus with recursion
// https://www.javascripttutorial.net/javascript-recursive-function/

const flattenBonus = function(array, flattenedArr = []){
  // let flattenedArr = [];
  console.log(array);
  console.log(flattenedArr);

  array.forEach(function(element){
    // console.log(`element: ${element}`)

    if(Array.isArray(element)){
      flattenedArr = flattenBonus(element, flattenedArr);
    } else {
      flattenedArr.push(element);
    }
  });
  return flattenedArr;
}
console.log(
	flattenBonus([
		'hello',
		[
			[true, false, true],
			'world',
			42,
			[1, 2, ['a', 'b', ['A', [0, 1, 2], 'C']]],
		],
	]),
);
