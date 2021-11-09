// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

const rectangleA = 
{
    length: 4,
    width: 4
};

// * isSquare - Returns whether the rectangle is a square or not
const isSquare = function (rectangle) 
{
    if(rectangle.length === rectangle.width)
    {
        return true;
    }
    else
    {
        return false;
    }
}
// * area - Returns the area of the rectangle
const rectangleArea = function (rectangle) 
{
    return rectangle.length * rectangle.width;
}
// * perimeter - Returns the perimeter of the rectangle
const rectanglePerimeter = function (rectangle) 
{
    return rectangle.length + rectangle.width + rectangle.length + rectangle.width;
}

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
const triangleA = 
{
    sideA: 3,
    sideB: 4,
    sideC: 4
};
// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function (triangle)
{
    if(triangleA.sideA === triangleA.sideB === triangleA.sideC)
    {
        return true;
    }
    else
    {
        return false;
    }
}
// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function (triangle)
{
    if(triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC ||
       triangle.sideA === triangle.sideC && triangle.sideB !== triangle.sideC ||
       triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA )
    {
        return true;
    }
    else
    {
        return false;
    }
}
// * area - Returns the area of the Triangle
const triangleArea = function (triangle)
{
    const height = Math.sqrt(triangle.sideA/2) + Math.sqrt(triangle.sideB); //find the height
    return (height*triangle.sideA)/2; // (h*a)/2 <-- to find the area
}
// * isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function (triangle)
{
    const angleA = Math.tanh((triangle.sideA/2)/triangle.sideC); // find angle 'a' using 'angle of elevation'
    const angleB = Math.tanh((triangle.sideA/2)/triangle.sideB); // find angle 'b' using 'angle of elevation'
    const angleC = 180 - (angleA+angleB); // triangles angles need to add up to 180 degrees. So angle 'c' is equal to '180 - (a*b)'
    
    if(angleA > 90 || angleB > 90 || angleC > 90) // now that we know all the angles we can check if one angle is greater than 90 degrees
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

