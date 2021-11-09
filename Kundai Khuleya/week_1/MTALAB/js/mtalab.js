//
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

console.log(createRoute("Change at Union Square."));

const lineData = {
    "N": [
        "Times Square",
        "34th",
        "28th",
        "23rd",
        "Union Square",
        "8th"
    ],
    "L": [
        "8th",
        "6th",
        "Union Square",
        "3rd",
        "1st"
    ],
    "6":[
        "Grand Central",
        "33rd",
        "28th",
        "23rd",
        "Union Square",
        "Astor Place"
    ]
};

const createRoute = function(start, end){
    let result = []
    // Determine if a change will be required (are the start and end on the same line)
    if(start.line === end.line){
        const line = lineData[start.line] // Extract line information
        const start_index = line.findIndexOf(start.station) // Get the index of the starting point
        const end_index = line.findIndexOf(end.station) // Get the index of the end point

        if(start_index > 0 && end_index > 0){ // Check that they are valid station
            if(start_index - end_index < 0){ // If the starting point comes first
                result = line.slice(start_index, end_index + 1)
            } else { // If not, then reverse
                result = line.reverse().slice(line.length - end_index, line.length - start_index)};
                result = [result.map(x => { // Format the output so that it can be parsed by report generator
                              return {
                                  "line": start.line,
                                  "station": x
                              }
                          })]
                      }
                  } else {
                      let result = []
                      const start_line = line_data[start.line]
                      const end_line = line_data[end.line]

                      let start_route = []
                      let end_route = []

                      // First, find the start station and route to Union Square
                      start_index = start_line.findIndexOf(start.station)
                      start_union_index = start_line.findIndexOf("Union Square")

                      if(start_index > 0){ // Check that the station is valid
                          if(start_index - start_union_index < 0){
                              start_route = start_line.slice(start_index, start_union_index + 1)
                          } else {
                              start_route = start_line.reverse().slice(start_line.length - start_union_index, start_line.length - start_index) // [TODO] Tweak this line as well.
                          }
                      } else { // Throw error if the station doesn't exist
                          throw Error("Invalid starting station.")
                      };
                      subarray

                            start_route = start_route.map(x => {
                                return {
                                    "line": start.line,
                                    "station": x
                                }
                            })

                            end_route = end_route.map(x => {
                                return {
                                    "line": end.line,
                                    "station": x
                                }
                            })

                            result = [start_route, end_route]
                        }

                        return result;
                    }

                    const main = () => {


                        const route = create_route(start, end)
                   if(route.length < 2){
                            route_stops = route[0].map(x => {x.station}).join(",")
                            console.log(`You must travel through the following stop on the ${route[0][0].line} line: ${route_stops}`)
                        } else {
                            console.log(`You must travel through the following stops on the ${route[0][0].line} line: ${route[0].map(x => x.station).join(",")}`)
                            console.log(`Change at Union Square`)
                            console.log(`Your journey continues through the following stops: ${route[1].map(x => x.station).join(",")}`)
                        }
                    }

                    main();

                    //¯\_(ツ)_/¯//   
