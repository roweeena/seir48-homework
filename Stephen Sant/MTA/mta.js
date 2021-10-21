// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
//   and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const lineN = [`NTS`,`N38`,`N28`,`N23`,`US`,`N8`];
const lineL = [`L8`,`L6`,`US`,`L3`,`L1`];
const lineSix = [`6GC`,`633`,`628`,`623`,`US`,`6AP`];

const whichLine = function(station)
{
    if(station.charAt(0) === 'N')
    {
        return lineN;
    }
    else if(station.charAt(0) === 'L')
    {
        return lineL;
    }
    else
    {
        return lineSix;
    }
} 

let curStation = '';
let curLine = '';
let finalStation = '';

const goTo = function(start, end)
{
    curStation = start;
    curLine = whichLine(start);
    finalStation = end; 

    if(start.charAt(0) === end.charAt(0)) // If the station we're going to is on the same line then we don't need to change line.
    {
        console.log('No need to change.');
        goToStation(curLine,end);
    }
    else
    {
        console.log("Yea, we're goin' need to change at Union Station.");
        goToUnion(start);
    }
}
const goToUnion = function(start)
{
    if(whichLine(start).indexOf(start) > curLine.indexOf('US')) // If the start is further along the line than the end, then go back down the line. 
    {
        console.log('We need to go backwards.');
        for (let i = whichLine(start).indexOf(start); i >= curLine.indexOf('US'); i--) 
        {
            console.log(curLine[i]);
            curStation = curLine[i];
            if(curStation === curLine.indexOf('US'))
            {
                curLine = whichLine(finalStation);
                console.log('Switching at Union.');
                goToStation(curStation,finalStation);
            }
        }
    }
    else if(whichLine(start).indexOf(start) < curLine.indexOf('US'))
    {
        console.log('We need to go forwards.');
        for (let i = whichLine(start).indexOf(start); i <= curLine.indexOf('US'); i++) 
        {
            console.log(curLine[i]);
            curStation = curLine[i];
            if(curStation === curLine.indexOf('US'))
            {
                curLine = whichLine(finalStation);
                console.log('Switching at Union.');
                goToStation(curStation,finalStation);
            }
        }
    }
    else
    {
        curLine = whichLine(finalStation);
        console.log('Switching at Union.');
        goToStation(curStation,finalStation);
    }
}

const goToStation = function(start, end)
{
    if(whichLine(start).indexOf(start) > whichLine(end).indexOf(end)) // If the start is further along the line than the end, then go back down the line. 
    {
        console.log('We need to go backwards.');
        for (let i = whichLine(start).indexOf(start); i >= whichLine(end).indexOf(end); i--) 
        {
            console.log(curLine[i]);
            curStation = curLine[i];
        }
    }
    else if(whichLine(start).indexOf(start) < whichLine(end).indexOf(end))
    {
        console.log('We need to go forwards.');
        for (let i = whichLine(start).indexOf(start); i <= whichLine(end).indexOf(end); i++) 
        {
            console.log(curLine[i]);
            curStation = curLine[i];
        }
    }
}
