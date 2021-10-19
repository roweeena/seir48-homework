// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. 
// You don't know their length and they can contain both integers and floating point numbers.

// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```

const SumArrays = function (arrayA,arrayB)
{
    let x = 0;
    let y = 0;
    for (let i = 0; i < arrayA.length; i++) 
    {    
        x += arrayA[i]; // Sum of array A.
    }
    for (let i = 0; i < arrayB.length; i++) 
    {    
        y += arrayB[i]; // Sum of array B.
    }
    return x + y; // Add array A and B together.
}

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments).
// Hint - look up 'The arguments object'.

// # Bonus bonus
// Create another version of the above function that can accept numbers, arrays or a combination of the two for any amount of arguments.
