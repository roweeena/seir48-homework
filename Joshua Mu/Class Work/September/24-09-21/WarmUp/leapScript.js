const year1 = 1997;
const year2 = 1996;
const year3 = 1900;
const year4 = 2000;

function IsLeapYear(_year)
{
    if (_year % 400 === 0)
    {
        return `${_year} is a leap year.`
    }
    else if (_year % 4 === 0 && _year % 100 !== 0)
    {
        return `${_year} is a leap year.`
    }
    else{
        return `${_year} is not a leap year.`
    }
}

let request = prompt("Input a year and we'll let you know whether it's a leap year or not");

console.log(IsLeapYear(1997));
console.log(IsLeapYear(1996));
console.log(IsLeapYear(1900));
console.log(IsLeapYear(2000));
console.log(IsLeapYear(parseInt(request)));