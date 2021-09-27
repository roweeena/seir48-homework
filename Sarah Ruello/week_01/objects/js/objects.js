// # Geometry Function Lab

// ### Part 1, Rectangle
const rectangleA = {
    length: 4,
    width: 4,
};

const rectangleB = {
    length: 45,
    width: 30,
};

function isRectangle(shape) {
    let square = false;
    if (shape.length === shape.width) {
        square = true;
    }
    let s = shape.length * shape.width;
    let perimeter = shape.length * 2 + shape.width * 2;

    return `Is this a square? ${square} \n Area: ${s} \n Perimeter: ${perimeter}`;
}

console.log(isRectangle(rectangleA));
console.log(isRectangle(rectangleB));

// ### Part 2, Triangle
const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4,
};

const triangleB = {
    sideA: 25,
    sideB: 52,
    sideC: 44,
};

const triangleC = {
    sideA: 25,
    sideB: 25,
    sideC: 25,
};

function isTriangle(shape) {
    // check side equivalency across all 3:
    let equilateral = false;
    if (shape.sideA === shape.sideB && shape.sideB === shape.sideC) {
        equilateral = true;
    }

    // triangle area using Heron's formula:
    let s = (shape.sideA + shape.sideB + shape.sideC) / 2;
    let triArea = Math.sqrt(
        s * (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC)
    );

    // check for obtuseness:
    let obtuse = false;
    let aSquared = Math.floor(Math.pow(shape.sideA, 2));
    let bSquared = Math.floor(Math.pow(shape.sideB, 2));
    let cSquared = Math.floor(Math.pow(shape.sideC, 2));

    if (
        aSquared > cSquared + bSquared ||
        bSquared > aSquared + cSquared ||
        cSquared > aSquared + bSquared
    ) {
        obtuse = true;
    }

    // check for isoceles:
    let isoceles = false;
    if (
        shape.sideA === shape.sideB ||
        shape.sideA === shape.sideC ||
        shape.sideB === shape.sideC
    ) {
        isoceles = true;
    }

    return `Equilateral? ${equilateral} \n Isoceles? ${isoceles} \n Area: ${triArea.toFixed(
    2
  )} \n Obtuse? ${obtuse}`;
}

console.log(isTriangle(triangleA));
console.log(isTriangle(triangleB));
console.log(isTriangle(triangleC));

// ### The Cash Register:
const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36",
};

function cashRegister(object) {
    // collect values from object and store in an array, items:
    const items = Object.values(object);
    let sum = 0;
    // add the values of all items together whilst parsing to a number from a string:
    for (let i = 0; i < items.length; i++) {
        sum += Number(items[i]);
    }
    return sum;
}

console.log(cashRegister(cartForParty)); // 60.55

// ### Credit Card Validation:
// seperate function (for neatness) to check all digits add up to more than 16:
function isSumLessThanSixteen(input) {
    let sumOfAll = 0;
    // add all digits from the numArray together, whilst converting to numbers from strings:
    for (let i = 0; i < input.length; i++) {
        sumOfAll += Number(input[i]);
    }
    return sumOfAll < 16;
}

// seperate function (for neatness) to check there are more than 2 different numbers:
function hasDiffNumbers(input) {
    let diffNumbers = false;
    // checks the first digit in the number array against the rest of them:
    for (let i = 1; i < input.length; i++) {
        if (input[0] !== input[i]) {
            diffNumbers = true;
        }
    }
    return diffNumbers;
}

function validateCreditCard(input) {
    // remove dashes:
    const numberOnly = input.replaceAll("-", "");
    // split remaining string into an array:
    const numArray = numberOnly.split("");

    // convert numberOnly string to Number() and check with isNaN() function:
    if (isNaN(Number(numberOnly))) {
        return { valid: false, error: "Not a valid number - contains letters." };
    }
    // using seperate func:
    if (isSumLessThanSixteen(numArray)) {
        return { valid: false, error: "Not a valid number - sum less than 16" };
    }

    // using seperate func- if no different numbers, returns false:
    if (!hasDiffNumbers(numArray)) {
        return {
            valid: false,
            error: "Not a valid number - does not have 2 different numbers",
        };
    }

    // if less than 16 digits:
    if (numberOnly.length < 16 || numberOnly.length > 16) {
        return { valid: false, error: "Not a valid number - less than 16 digits" };
    }

    // if last number is not an even number:
    if (Number(numberOnly[numberOnly.length - 1]) % 2 == 1) {
        return { valid: false, error: "Not a valid number." };
    }

    // valid number return message:
    return { valid: true, message: "Number accepted." };
}

console.log("9999-9999-8888-0000", validateCreditCard("9999-9999-8888-0000")); // true
console.log("6666-6666-6666-1666", validateCreditCard("6666-6666-6666-1666")); // true

console.log("a923-3211-9c01-1112", validateCreditCard("a923-3211-9c01-1112")); // false
console.log("4444-4444-4444-4444", validateCreditCard("4444-4444-4444-4444")); // false
console.log("1111-1111-1111-1110", validateCreditCard("1111-1111-1111-1110")); // false