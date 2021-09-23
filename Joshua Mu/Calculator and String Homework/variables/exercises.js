//Fortune Teller
const numberOfChildren = 5;
const partnersName = "Pardner";
const geographicLocation = "NSW";
const jobTitle = "Student";

console.log("You will be a " + jobTitle + " in " + geographicLocation
 + ", and married to " + partnersName + " with " + numberOfChildren + " kids");

//Age Calculator
const currentYear = new Date().getFullYear();
const birthYear = 2002;

function calculateAge(_currentYear, _birthYear)
{
    currentAge = _currentYear - _birthYear;
    return currentAge;
}

console.log("They are " + calculateAge(currentYear, birthYear));

//Lifetime Supply Calculator
const age = currentYear - birthYear;
const maxAge = 99;
const dailySnacking = 4;

function calculateLifetimeSupply(_currentAge, _maxAge, _dailySnacking)
{
    lifetimeSupply = (_maxAge - _currentAge) * _dailySnacking;
    console.log("You will need " + lifetimeSupply +
     " to last you until the ripe old age of " + maxAge);
}

calculateLifetimeSupply(currentAge, maxAge, dailySnacking);

//Geometrizer
const radius = 5;

function calculateCircumference(_radius)
{
    pi = 3.14;
    return 2 * pi * _radius;
}

function calculateArea(_radius)
{
    pi = 3.14;
    return pi * _radius^2;
}

console.log("The circumference is " + calculateCircumference(radius));
console.log("The area is " + calculateArea(radius));

//Temperature Converter

const celsius = 35;
const fahrenheit = 95;

function ConvertToFahrenheit(_celsius)
{
    return (_celsius * 9/5) + 32;
}

function ConvertToCelsius(_fahrenheit)
{
    return (_fahrenheit - 32) * 5/9;
}

console.log(fahrenheit + " F is " + ConvertToCelsius(fahrenheit) + " C");
console.log(celsius + " C is " + ConvertToFahrenheit(celsius) + " F");
