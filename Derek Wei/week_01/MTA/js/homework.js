// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


// array for the lines on the MTA network

const linesOnMTA = [
  'N',
  'L',
  '6'
];

// arrays for each line with each stop at a different index

const lineN = [
  'Times Square',
  '34th',
  '28th',
  '23rd',
  'Union Square',
  '8th'
];

const lineL = [
  '8th',
  '6th',
  'Union Square',
  '3rd',
  '1st',
];

const line6 = [
  'Grand Central',
  '33rd',
  '28th',
  '23rd',
  'Union Square',
  'Astor Place'
];


// takes the single character string for a line and returns a string matching the name of
// one of the line arrays if the line exists or returns false otherwise

const lineExists = (lineCharacter) => {
  for(let i = 0; i < linesOnMTA.length; i++) {
    if (lineCharacter === linesOnMTA[i]) {
      return `line${lineCharacter}`;
    }
  }
  console.log(`Line ${lineCharacter} does not exist.`)
  return false;
}

// takes a node and a line and returns the node if the node exists
// on that line or returns false otherwise

const nodeExists = (nodeInput, lineInput) => {
  let line = eval(lineInput);
  for (let i = 0; i < line.length; i++) {
    if (nodeInput === line[i]) {
      return nodeInput;
    }
  }
  console.log(`${nodeInput} does not exist on line ${lineInput[lineInput.length - 1]}.`);
  return false;
}

// takes a line and a start and end node on that line and returns an array with
// each node in order between the start and end node not including the start node

const showNodes = (lineInput, startNode, endNode) => {

  let line = eval(lineInput);
  let start = line.indexOf(startNode);
  let end = line.indexOf(endNode);
  let arrayNodes = [];

  if (end - start > 0) {
    for (let i = start + 1; i <= end; i++) {
      arrayNodes.push(line[i]);
    }
  } else {
    for (let i = start - 1; i >= end; i--) {
      arrayNodes.push(line[i]);
    }
  }
  return arrayNodes;

}

// takes one or two arrays from the showNodes function and sums the
// total number of nodes in those arrays

const countTotalNodes = (nodesFirst, nodesSecond = []) => {
  let totalNodes = nodesFirst.length + nodesSecond.length;
  if (totalNodes === 1) {
    console.log(`${totalNodes} stop in total.`);
  } else {
    console.log(`${totalNodes} stops in total.`);
  }
  return totalNodes;
}

// main function to show a trip between one node and another node on the MTA

const planTrip = function (startLineInput, startNodeInput, endLineInput, endNodeInput) {

  // checks the number of arguments input into function is 4
  if (arguments.length !== 4) {
    console.log(`Please enter in this format: "N", "Times Square", "6", "33rd"`);
    return false;
  }

  // checks if the lines exist on the MTA network
  let startLine = lineExists(startLineInput);
  let endLine = lineExists(endLineInput);

  // if lines do not exist, exit function
  if (startLine === false || endLine === false) {
    return false;
  }

  // checks if the nodes exist on the corresponding lines
  let startNode = nodeExists(startNodeInput, startLine);
  let endNode = nodeExists(endNodeInput, endLine);

  // if the nodes do not exist, exit function
  if (startNode === false || endNode === false) {
    return false;
  }

  // the start and end node are both Union Square
  if (startNode === endNode && startNode === 'Union Square') {
    console.log(`You are already at Union Square.`);

  // the start and end line are the same, the start and end node are the same but not Union Square
  } else if (startLine === endLine && startNode === endNode) {
    console.log(`You are already at ${startNode} on line ${startLineInput}.`);

  // the start and end line are the same, the start and end node are different
  } else if (startLine === endLine) {
    let nodesOnStartLine = showNodes(startLine, startNode, endNode);
    console.log(`You must travel through the following stops on the ${startLineInput} line: ${nodesOnStartLine.join(', ')}`);
    countTotalNodes(nodesOnStartLine);

  // the start and end line are different, the end node is Union Square
  } else if (endNode === 'Union Square') {
    let nodesOnStartLine = showNodes(startLine, startNode, 'Union Square');
    console.log(`You must travel through the following stops on the ${startLineInput} line: ${nodesOnStartLine.join(', ')}`);
    countTotalNodes(nodesOnStartLine);

  // the start and end line are different, the start node is Union Square
  } else if (startNode === 'Union Square') {
    let nodesOnEndLine = showNodes(endLine, 'Union Square', endNode);
    console.log(`You must travel through the following stops on the ${endLineInput} line: ${nodesOnEndLine.join(', ')}`);
    countTotalNodes(nodesOnEndLine);

  // the start and end line are different, neither the start or end node is Union Square
  } else {
    let nodesOnStartLine = showNodes(startLine, startNode, 'Union Square');
    console.log(`You must travel through the following stops on the ${startLineInput} line: ${nodesOnStartLine.join(', ')}`);
    console.log('Change at Union Square.');
    let nodesOnEndLine = showNodes(endLine, 'Union Square', endNode);
    console.log(`Your journey continues through the following stops on the ${endLineInput} line: ${nodesOnEndLine.join(', ')}`);
    countTotalNodes(nodesOnStartLine, nodesOnEndLine);
  }

  return true;
}

// testing cases

// planTrip('6', 'Union Square', 'N', 'Union Square');
// planTrip('N', 'Union Square', 'N', 'Union Square');
// planTrip('N', '34th', 'N', '34th');
// planTrip('N', 'Times Square', 'N', '8th');
// planTrip('6', 'Grand Central', '6', 'Union Square');
// planTrip('6', 'Grand Central', 'L', 'Union Square');
// planTrip('6', 'Grand Central', 'N', 'Union Square');
// planTrip('6', 'Union Square', 'N', 'Times Square');
// planTrip('L', 'Union Square', 'N', 'Times Square');
// planTrip('N', 'Union Square', 'N', 'Times Square');
// planTrip('N', 'Times Square', 'L', '8th');
// planTrip('N', 'Times Square', '6', 'Grand Central');
// planTrip('N', '8th', 'L', '8th');
