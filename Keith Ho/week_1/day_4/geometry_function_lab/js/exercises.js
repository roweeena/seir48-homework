// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
const rectangleA = {
  length: 4,
  width: 4,
};

const rectangleB = {
  length: 4,
  width: 8,
};

const rectangleFn = function(obj) {
  const a = obj.length;
  const b = obj.width;
  const area = a * b;
  const perimeter = ( a + b ) * 2;
  const isSquare = (a === b);
  const square = `It is Square, and area is ${ area } and perimeter is ${ perimeter }`;
  const rectangle = `It is Rectangle, and area is ${ area } and perimeter is ${ perimeter }`

  if ( isSquare ) {
    return square;
  } else {
    return rectangle;
  }
}

console.log(rectangleFn(rectangleA));
console.log(rectangleFn(rectangleB));
//
// ### Part 2, Triangle
//
const triangleA = {
  sideA: 5,
  sideB: 5,
  sideC: 5,
};
const triangleB = {
  sideA: 10,
  sideB: 5,
  sideC: 5,
};
const triangleC = {
  sideA: 8,
  sideB: 5,
  sideC: 6,
};
const triangleD = {
  sideA: 8,
  sideB: 5,
  sideC: 5,
};
const triangleE = {
  sideA: 9,
  sideB: 10,
  sideC: 2,
};

const longestSideFn = (a, b, c) => {
  if ( a > b) {
    if ( a > c) {
      return a;
    } else {
      return c;
    }
  } else if ( a < b) {
    if ( b > c ) {
      return b;
    } else {
      return c;
    }
  }
};


const triangleFn = function(obj) {
  const a = obj.sideA;
  const b = obj.sideB;
  const c = obj.sideC;
  const isTriangle = ( (a+b>c) && (a+c>b) && (b+c>a) );
  const s = ( a + b + c ) / 2;
  const area = Math.sqrt( s * (s-a)*(s-b)*(s-c) ).toFixed(2);
  const isEquilateral = ( a === b && a === c );
  const isIsosceles = ( a === b || a === c || b === c );
  const longestSide = longestSideFn(a, b, c);
  const sideArr = [a, b, c];
  const indexOfLongestSide = sideArr.indexOf(longestSide);
  sideArr.splice(indexOfLongestSide, 1);
  const isObtuse = ( (sideArr[0] ** 2 + sideArr[1] ** 2) < longestSide ** 2);

  if ( isTriangle ) {
    if ( isEquilateral ) {
      return `This triangle is Equilateral and area is ${ area }.`;
    } else if ( isIsosceles) {
      return `This triangle is Isosceles and area is ${ area }.`;
    } else if ( isObtuse ) {
      return `This triangle is Obtuse and area is ${ area }.`;
    } else {
      return `This is a normal triangle and area is ${ area }.`;
    }
  } else {
    return "This is NOT a triangle!";
  }
}

console.log( triangleFn(triangleA) );
console.log( triangleFn(triangleB) );
console.log( triangleFn(triangleC) );
console.log( triangleFn(triangleD) );
console.log( triangleFn(triangleE) );
