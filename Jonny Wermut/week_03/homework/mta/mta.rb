require 'pry'

lines = {
  'N' => {:stops => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']},
  'L' => {:stops => ['8th', '6th', 'Union Square', '3rd', '1st']},
  '6' => {:stops => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']}
}


binding.pry

# Checks if lines are the same
def lineCheck (l1, l2)
  if(l1 == l2)
    true;
  else 
    false;
  end
end 

# Grabs all stops on a given line
def getLineStops (l)
  lines[l][:stops]
end

getLineStops("N") 

# Get position in array of a stop
def getStationPosition (l,s)
  lines[l][:stops].index(s)
end 

def compareStationPositions (l,s1,s2)
  positionOne = getStationPosition(l,s1)
  positionTwo = getStationPosition(l,s2)
  if (positionTwo > positionOne)
    'forwards'
  elsif (positionTwo < positionOne)
    'backwards'
  end
end 




# def stationsToTravelForwards (l1, s1, l2, s2)
#     let stations = [];
#     let stationPositionOne = getStationPosition(l1,s1)
#     let stationPositionTwo = getStationPosition(l2,s2)
#     for (let i=stationPositionOne+1; i<=stationPositionTwo; i++) {
#       stations.push(lines[getLineArrayKey(l1)].stops[i]);
#     }
#   return stations;
# }

# const stationsToTravelBackwards = (l1, s1, l2, s2) => {
#     let stations = [];
#     let stationPositionOne = getStationPosition(l1,s1); //Retrives position in the array of station 1
#     let stationPositionTwo = getStationPosition(l2,s2); // Retrieves position in the array of station 2
#     for (let i=stationPositionOne-1; i>=stationPositionTwo; i--) {
#       stations.push(lines[getLineArrayKey(l1)].stops[i]);
#     }
#   return stations;
# }

# def travelInstructionsSameLine (l1, s1, l2, s2)
#     stationsToTravel = []
#     travelDirection = compareStationPositions(l1,s1,s2);  
#     if (travelDirection == 'forwards')
#         stationsToTravel.push(stationsToTravelForwards(l1,s1,l2,s2))
#     elsif (travelDirection == 'backwards')
#         stationsToTravel.push(stationsToTravelBackwards(l1,s1,l2,s2))
#     end
#     stationsToTravel
# end 

# def directions (l1, s1, l2, s2)
#   stationsToTravelFirst = []
#   stationsToTravelSecond = []
#   if(lineCheck(l1,l2)) 
#     stationsToTravelFirst = travelInstructionsSameLine(l1,s1,l2,s2);
#     puts "You must travel through the following stops on the #{lines[getLineArrayKey(l1)].name} line: #{stationsToTravelFirst.join(', ')}." 
#   else { //what do we do if they're not on the same line?
#     stationsToTravelFirst = travelInstructionsSameLine(l1,s1,l1,'Union Square');
#     console.log(`You must travel through the following stops on the ${lines[getLineArrayKey(l1)].name} line: ${stationsToTravelFirst.join(', ')}.`);
#     console.log('Change at Union Square.');
#     stationsToTravelSecond = travelInstructionsSameLine(l2,'Union Square',l2,s2);
#     console.log(`You must travel through the following stops on the ${lines[getLineArrayKey(l2)].name} line: ${stationsToTravelSecond.join(', ')}.`);
#   }
# }



