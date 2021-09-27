const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

//#region Definitions

function findLocationIndex(startLine, startName) {
    if (startLine === "N") {
        for (let i = 0; i < lineN.length; i++) {
            if (lineN[i] === startName) {
                return i;
            }
        }
    }

    else if (startLine === "L") {
        for (let i = 0; i < lineL.length; i++) {
            if (lineL[i] === startName) {
                return i;
            }
        }
    }

    else {
        for (let i = 0; i < line6.length; i++) {
            if (line6[i] === startName) {
                return i;
            }
        }
    }

}

function findCommonPoint(firstLine, secondLine) {
    if (firstLine === "N" && secondLine === "6") {
        for (let i = 0; i < lineN.length; i++) {
            for (let j = 0; j < line6.length; j++) {
                if (line6[j] === lineN[i]) {
                    return line6[j];
                }
            }
        }
    }
    if (firstLine === "N" && secondLine === "L") {
        for (let i = 0; i < lineN.length; i++) {
            for (let j = 0; j < lineL.length; j++) {
                if (lineL[j] === lineN[i]) {
                    return lineL[j];
                }
            }
        }
    }
    if (firstLine === "L" && secondLine === "6") {
        for (let i = 0; i < lineL.length; i++) {
            for (let j = 0; j < line6.length; j++) {
                if (line6[j] === lineL[i]) {
                    return line6[j];
                }
            }
        }
    }
}

function findCommonIndex(common, line) {
    if (line === "N") {
        for (let i = 0; i < lineN.length; i++) {
            if (lineN[i] === common) {
                return i;
            }
        }
    }
    if (line === "L") {
        for (let i = 0; i < lineL.length; i++) {
            if (lineL[i] === common) {
                return i;
            }
        }
    }
    if (line === "6") {
        for (let i = 0; i < line6.length; i++) {
            if (line6[i] === common) {
                return i;
            }
        }
    }
}

function findJoiningStations(primaryLine, primaryIndex, primaryCommonIndex) {
    let stations = [];

    if (primaryLine === "N") {
        if (primaryIndex < primaryCommonIndex) {
            for (let i = primaryIndex; i < primaryCommonIndex + 1; i++) {
                stations.push(" " + lineN[i]);
            }

            return stations;
        }

        else if (primaryIndex > primaryCommonIndex) {

            for (let j = primaryCommonIndex; j < primaryIndex + 1; j++) {
                stations.push(" " + lineN[j]);
            }

            return stations;
        }
    }

    if (primaryLine === "L") {
        if (primaryIndex < primaryCommonIndex) {
            for (let i = primaryIndex; i < primaryCommonIndex + 1; i++) {
                stations.push(" " + lineL[i]);
            }

            return stations;
        }

        else if (primaryIndex > primaryCommonIndex) {

            for (let j = primaryCommonIndex; j < primaryIndex + 1; j++) {
                stations.push(" " + lineL[j]);
            }

            return stations;
        }
    }

    if (primaryLine === "6") {
        if (primaryIndex < primaryCommonIndex) {
            for (let i = primaryIndex; i < primaryCommonIndex + 1; i++) {
                stations.push(" " + line6[i]);
            }

            return stations;
        }

        else if (primaryIndex > primaryCommonIndex) {

            for (let j = primaryCommonIndex; j < primaryIndex + 1; j++) {
                stations.push(" " + line6[j]);
            }

            return stations;
        }
    }
}

//#endregion 

function planTrip(destinations) {
    let startingLine = destinations[0];
    //console.log(`Starting Line is ${startingLine}.`);
    let startingIndex = findLocationIndex(startingLine, destinations[1]);
    //console.log(`Starting Index is ${startingIndex}.`);
    let secondaryLine = destinations[2];
    //console.log(`Secondary Line is ${secondaryLine}.`)
    let secondaryIndex = findLocationIndex(secondaryLine, destinations[3]);
    //console.log(`Secondry Index is ${secondaryIndex}.`);
    let commonPoint = "Union Square";
    //console.log(`Common Point is ${commonPoint}`);
    let startingCommonIndex = findCommonIndex(commonPoint, startingLine);
    //console.log(`Starting Common Index is ${startingCommonIndex}.`);
    let secondaryCommonIndex = findCommonIndex(commonPoint, secondaryLine);
    //console.log(`Secondary Common Index is ${secondaryCommonIndex}.`);

    let startingStations = findJoiningStations(startingLine, startingIndex, startingCommonIndex);
    let secondaryStations = findJoiningStations(secondaryLine, secondaryIndex, secondaryCommonIndex);
    secondaryStations.pop(0);
    secondaryStations.reverse();

    console.log(`You must travel through the following stops on the ${startingLine} line: ${startingStations}.`);
    console.log(`Change at ${commonPoint}.`);
    console.log(`Your journey continues through the following stops: ${secondaryStations}.`);
}


planTrip(['N', 'Times Square', '6', '33rd']);