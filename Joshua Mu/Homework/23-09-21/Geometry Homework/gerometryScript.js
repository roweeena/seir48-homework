//Rectangles
const rectangleA = {
    length: 4,
    width: 6
};

const rectangleB = {
    length: 4,
    width: 4
};

function IsItASquare(_rectangle) {
    if (_rectangle.length === _rectangle.width) {
        return "This is a square";
    }
    else {
        return "This is a rectangle";
    }
}

console.log(IsItASquare(rectangleA));
console.log(IsItASquare(rectangleB));

function AreaOfARhombus(_rhombus) {
    return (_rhombus.length * _rhombus.width).toString();
}

console.log(AreaOfARhombus(rectangleA));

function PerimeterOfARhomebus(_toBePerimetered) {
    return (_toBePerimetered.length * 2 + _toBePerimetered.width * 2).toString();
}

console.log(PerimeterOfARhomebus(rectangleA));

//Triangles
const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
}
const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 4
}
const triangleC = {
    sideA: 3,
    sideB: 4,
    sideC: 5
}

function IsEquilateral(_triangle) {
    if (_triangle.sideA === _triangle.sideB && _triangle.sideB === _triangle.sideC) {
        return "This is an equilateral triangle";
    }
    else {
        return "This is not an equilateral triangle";
    }
}

console.log(IsEquilateral(triangleA));
console.log(IsEquilateral(triangleB));

function IsIsoceles(_anotherTriangle) {
    if (_anotherTriangle.sideA === _anotherTriangle.sideB && _anotherTriangle.sideA !== _anotherTriangle.sideC ||
        _anotherTriangle.sideA === _anotherTriangle.sideC && _anotherTriangle.sideA !== _anotherTriangle.sideB||
        _anotherTriangle.sideB === _anotherTriangle.sideC && _anotherTriangle.sideA !== _anotherTriangle.sideB) {
        return "Triangle is Isoceles";
    }
    else {
        return "Triangle is not Isoceles";
    }
}

console.log(IsIsoceles(triangleA));
console.log(IsIsoceles(triangleB));

function IsObtuse(_yetAnotherTriangle) {
    if (_yetAnotherTriangle.sideA !== _yetAnotherTriangle.sideB ||
        _yetAnotherTriangle.sideA !== _yetAnotherTriangle.sideC ||
        _yetAnotherTriangle.sideB !== _yetAnotherTriangle.sideC) {
        return "This triangle has an obtuse angle";
    }
    else {
        return "This triangle doesn't have an obtuse angle";
    }
}

console.log(IsObtuse(triangleB));
console.log(IsObtuse(triangleC));