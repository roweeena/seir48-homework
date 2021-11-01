// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. 
//    Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (x,y)
{
    if(x>y)
    {
        return(x);
    }
    else
    {
        return(y);
    }
}

console.log(maxOfTwoNumbers(4,2));
console.log(maxOfTwoNumbers(2,4));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = function (x,y,z)
{
    if(x>y && x>z)
    {
        return(x);
    }
    else if(y>x && y>z)
    {
        return(y);
    }
    else if(z>x && z>y)
    {
        return(z);
    }
}

console.log(maxOfThreeNumbers(4,2,5));
console.log(maxOfThreeNumbers(2,5,4));
console.log(maxOfThreeNumbers(5,4,2));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function (letter)
{
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
    {
        return true;
    }
    else
    {
        return false;
    }
}

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. 
//    For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const numberArray = [1,2,3,4];

const sumArray = function (array)
{
    let temp = 0;
    for(i = 0; i < array.length; i++)
    {
        temp += array[i];
    }
    return temp;
}

const multiplyArray = function (array)
{
    let temp = 0;
    for(i = 0; i < array.length; i++)
    {
        if(temp === 0)
        {
            temp += array[i];
        }
        else
        {
            temp *= array[i];
        }
    }
    return temp;
}

console.log(sumArray(numberArray));
console.log(multiplyArray(numberArray));