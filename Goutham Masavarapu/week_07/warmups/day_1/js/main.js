// ## Arrays - Flatten and Reverse
//
// The goal of this exercise is to manipulate arrays by creating a function that
 // can reverse an array and by creating a function that can flatten an array.
 // Do not use any libraries to complete this task - write this stuff from scratch
  // using standard JS methods and objects.
//
// - Make two functions
//   - reverse
//   - flatten
//
// ----------------------------------------------------------
//                    REVERSE METHODS:
// ----------------------------------------------------------



var arrayToReverse = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log( "Original:" );
console.log( arrayToReverse );
console.log( "-----------------------------------" );

// ----------------------------------------------------------
// Method one: Loop through the array backwards,
// push the new values to a return array, and output it.

var rev1 = function( array ){
  var output = [];
  for( var i = array.length - 1; i >= 0; i-- ){
    output.push( array[i] );
  }

  console.log( "Rev1:" );
  console.log( output );
  return output;
};

rev1( arrayToReverse );

// ----------------------------------------------------------
// Method two: create a copy of the array, shift from the start array, and unshift that value to the start of the output array;

var rev2 = function( array ){
  var output = [];
  // We need slice to make sure this is a *new* array.
  // newArray = array will modify the original array. Slice forces a new array with the same value.

  newArray = array.slice();

  for( var i = 0; i < array.length; i++ ){
    var index = newArray.shift();
    output.unshift( index );
  }

  console.log( "Rev2:" );
  console.log( output );
  return output;
};

rev2( arrayToReverse );

// ----------------------------------------------------------
// Method three:
// Count in 2 different directions at the same time
// Counting up, assign that value as a key
// Counting down, assign that value as a value stored on the key
// At the end, use Object.values to strip the reversed values and return them.

var rev3 = function( array ){
  var outputObj = {};
  var counter = array.length;

  for( var i = 0; i < array.length; i++ ){
    outputObj[i] = counter;
    counter --;
  }

  console.log( "Rev3:" );
  console.log( Object.values( outputObj ) );
  return Object.values( outputObj );
};

rev3( arrayToReverse );

// ----------------------------------------------------------
// Method four: ... .reverse();

var rev4 = function ( array ){
  console.log( "Rev4:" );
  console.log( array.reverse() );
  return array.reverse();
};

rev4( arrayToReverse );

// ----------------------------------------------------------
//                     FLATTEN METHODS:
// ----------------------------------------------------------


var arrayToFlatted = [ 1, [2], [3, [4]], 5, [[[6]]]];

console.log('');
console.log( "Original flatten:" );
console.log( arrayToFlatted );
console.log( "-----------------------------------" );

// ----------------------------------------------------------
//Method one: Use concat to mash the array down a level.

var flatten1 = function( array ){
  var flat = [].concat.apply( [], array );
  console.log( "Flatten1:" );
  console.log( flat );
  return flat;
};

flatten1( arrayToFlatted );

// ----------------------------------------------------------
// Method two:
// Loop through the array
// If the current index is an array, loop through that
// Push all values to an output, and return it.


var flatten2 = function( array ){
  var output = [];
  // loop through the array
  for( var i = 0; i < array.length; i++ ){
     // Check if this index is an array
     // Array.isArray is not totally supported - the polyfill looks like this:
     // Object.prototype.toString.call(arg) === '[object Array]'
     if( Array.isArray( array[i] ) ){
      for( var j = 0; j < array[i].length; j++ ){
        output.push( array[i][j] );
      }
     } else {
      output.push( array[i] );
     }
  }

  console.log("Flatten2:");
  console.log( output );
  return output;
};

flatten2( arrayToFlatted );
// ```js
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// ```
//
// You only need to make flatten work to one level deep! You should be able to flatten
// this - ` ["Hello", ["World"]] ` - but not this - ` ["Hello", [[["World"]]]] `
//
// ## Bonus
//
// Make one that flattens any array that you pass into it:
// ` ["Hello", [[["World"], 42]]] ` -> `[ "Hello", "World", 42 ]`
