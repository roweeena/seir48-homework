//console.log('Test it works.')

// # Geometry Function Lab
// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
// * isSquare - Returns whether the rectangle is a square or not
    //are length and width equal?
// * area - Returns the area of the rectangle
    //length * width
// * perimeter - Returns the perimeter of the rectangle
    //(length + width * 2)

// ```javascript
const rectangleA = {
  length: 4,
  width: 4
};
// ```

const isSquare = function (rectangle) {
    if (rectangle.length !== rectangle.width) {
        console.log(`This is a rectangle.`);
        return true;
    } else {
        console.log(`This is a square.`);
        return false;
    }
}

isSquare(rectangleA)

const squareArea = function (rectangle) {
    area = rectangle.width * rectangle.length;
    console.log(`The area of this square is ${area} square cm.`);
    return area;
}

squareArea(rectangleA)

const squarePerimeter = function (rectangle) {
    perimeter = (rectangle.width + rectangle.length) * 2;
    console.log(`The perimeter of this square is ${perimeter}cm.`);
    return perimeter;
}

squarePerimeter(rectangleA)

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
// ```

const isEquilateral = function (triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideC) {
        console.log(`This is an equilateral triangle.`);
        return true;
    } else {
        console.log(`This is not an equilateral triangle.`);
        return false;
    }
}

isEquilateral(triangleA)

const isIsosceles = function (triangle) {
    if ((triangle.sideA === triangle.sideB) && (triangle.sideA !== triangle.sideC)) {
        console.log(`This is an isosceles triangle.`);
        return true;
    } else if ((triangle.sideA === triangle.sideC) && (triangle.sideA !== triangle.sideB)){ 
        console.log(`This is an isosceles triangle.`);
        return true;
    } else if ((triangle.sideB === triangle.sideC) && (triangle.sideA !== triangle.sideB)){ 
        console.log(`This is an isosceles triangle.`);
        return true;
    } else {
        console.log(`This is not an isosceles triangle.`);
        return false;
    }
}

isIsosceles(triangleA)

const isObtuse = function (triangle) {
    if ((triangle.sideA !== triangle.sideB) && (triangle.sideA !== triangle.sideC) && (triangle.sideB !== triangle.sideC)) {
        console.log(`This is an obtuse (scalene) triangle.`);
        return true;
    } else {
        console.log(`This is not an obtuse (scalene) triangle.`);
        return false;
    }
}

isObtuse(triangleA)