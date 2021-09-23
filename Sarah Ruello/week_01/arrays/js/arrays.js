// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers(num1, num2) {
<<<<<<< HEAD
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
=======
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
}

console.log(maxOfTwoNumbers(344, 56));
console.log(maxOfTwoNumbers(3, 5));
console.log(maxOfTwoNumbers(3323, 656));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
<<<<<<< HEAD
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
=======
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
}

console.log(maxOfThree(34, 678, 932));
console.log(maxOfThree(432, 67, 2));
console.log(maxOfThree(678, 5345, 332));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(input) {
<<<<<<< HEAD
  // take first charactor of whatever is inputted and convert to lowercase for strict equality:
  firstLetter = input.charAt(0).toLowerCase();

  if (
    firstLetter === "a" ||
    firstLetter === "e" ||
    firstLetter === "i" ||
    firstLetter === "o" ||
    firstLetter === "u"
  ) {
    return "true";
  } else {
    return "false";
  }
=======
    // take first charactor of whatever is inputted and convert to lowercase for strict equality:
    firstLetter = input.charAt(0).toLowerCase();

    if (
        firstLetter === "a" ||
        firstLetter === "e" ||
        firstLetter === "i" ||
        firstLetter === "o" ||
        firstLetter === "u"
    ) {
        return "true";
    } else {
        return "false";
    }
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
}

console.log(isVowel("A"));
console.log(isVowel("E"));
console.log(isVowel("I"));
console.log(isVowel("O"));
console.log(isVowel("Umbrella"));
console.log(isVowel("v"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

function sumArray(array) {
<<<<<<< HEAD
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
=======
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([11, 22, 33, 44])); // 110

function multiplyArray(array) {
<<<<<<< HEAD
  let sum = array[0];
  for (i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
=======
    let sum = array[0];
    for (i = 0; i < array.length; i++) {
        sum *= array[i];
    }
    return sum;
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
}

console.log(multiplyArray([1, 2, 3, 4])); // 24
console.log(multiplyArray([11, 22, 33, 44])); // ?? doing a confuse - calc is different?
console.log(multiplyArray([5, 10, 20, 30])); // ?? doing a confuse

// ## Bonus
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(string) {
<<<<<<< HEAD
  // split() - splits string into array of substrings. ("") tells the method to split every character into an array of its own. E.g. to reverse the words you would use a space delimiter instead.
  // reverse() - method reverses the order of the elements in an array.
  // join() - puts them back together into one string.
  let reverso = string.split("").reverse().join("");
  return reverso;
=======
    let reverso = string.split("").reverse().join("");
    return reverso;
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
}

console.log(reverseString("Happy Happy Joy Joy"));
console.log(
<<<<<<< HEAD
  reverseString(
    "Aurora Borealis!? At this time of year, at this time of day, in this part of the country, localized entirely within your kitchen!?"
  )
=======
    reverseString(
        "Aurora Borealis!? At this time of year, at this time of day, in this part of the country, localized entirely within your kitchen!?"
    )
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
);

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

function findLongestWord(array) {
<<<<<<< HEAD
  let longest = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}

console.log(
  findLongestWord(["Dog", "Mouse", "Crocodile", "Rabbit", "Hippopotamus"])
);
console.log(
  findLongestWord(["Umbrella", "Pickle", "Chrysanthemum", "Cephalopod"])
=======
    let longest = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}

console.log(
    findLongestWord(["Dog", "Mouse", "Crocodile", "Rabbit", "Hippopotamus"])
);
console.log(
    findLongestWord(["Umbrella", "Pickle", "Chrysanthemum", "Cephalopod"])
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

function filterLongWords(array, num) {
<<<<<<< HEAD
  let message = "";
  for (i = 0; i < array.length; i++) {
    if (array[i].length >= num) {
      message += array[i] + " ";
    }
  }
  return message;
=======
    let message = "";
    for (i = 0; i < array.length; i++) {
        if (array[i].length >= num) {
            message += array[i] + " ";
        }
    }
    return message;
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
}

console.log(filterLongWords(["Dog", "Mouse", "Crocodile", "Rabbit"], 5));
console.log(
<<<<<<< HEAD
  filterLongWords(["Umbrella", "Pickle", "Chrysanthemum", "Cephalopod"], 6)
);
=======
    filterLongWords(["Umbrella", "Pickle", "Chrysanthemum", "Cephalopod"], 6)
);
>>>>>>> 2a710d982d9f1dc12f6439eab7a8efd4489c1037
