require 'pry'

@lines = {
  'N' => {:stops => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']},
  'L' => {:stops => ['8th', '6th', 'Union Square', '3rd', '1st']},
  '6' => {:stops => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']}
}

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
  @lines[l][:stops]
end

# Get position in array of a stop
def getStationPosition (l,s)
  @lines[l][:stops].index(s)
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

def stationsToTravelForwards (l1, s1, l2, s2)
    stations = [ ]
    stationPositionOne = getStationPosition(l1,s1)
    stationPositionTwo = getStationPosition(l2,s2)
    i = stationPositionOne + 1
    while i<=stationPositionTwo
      stations.push(@lines[l1][:stops][i])
      i += 1
  end
  stations
end

def stationsToTravelBackwards (l1, s1, l2, s2)
    stations = [ ]
    stationPositionOne = getStationPosition(l1,s1)
    stationPositionTwo = getStationPosition(l2,s2)
    i = stationPositionOne - 1
    while i>=stationPositionTwo
      stations.push(@lines[l1][:stops][i])
      i -= 1
  end
  stations
end

def travelInstructionsSameLine (l1, s1, l2, s2)
    stationsToTravel = [ ]
    travelDirection = compareStationPositions(l1,s1,s2);  
    if (travelDirection == 'forwards')
        stationsToTravel.push(stationsToTravelForwards(l1,s1,l2,s2))
    elsif (travelDirection == 'backwards')
        stationsToTravel.push(stationsToTravelBackwards(l1,s1,l2,s2))
    end
    stationsToTravel
end 

def directions (l1, s1, l2, s2)
  stationsToTravelFirst = []
  stationsToTravelSecond = []
  if(lineCheck(l1,l2)) 
    stationsToTravelFirst = travelInstructionsSameLine(l1,s1,l2,s2);
    puts "You must travel through the following stops on the #{l1} line: #{stationsToTravelFirst.join(', ')}." 
  else
    stationsToTravelFirst = travelInstructionsSameLine(l1,s1,l1,'Union Square');
    puts "You must travel through the following stops on the #{l1} line: #{stationsToTravelFirst.join(', ')}."
    puts "Change at Union Square."
    stationsToTravelSecond = travelInstructionsSameLine(l2,'Union Square',l2,s2);
    puts "You must travel through the following stops on the #{l2} line: #{stationsToTravelSecond.join(', ')}."
  end
end

puts 'What line are you on?'
line1 = gets.chomp.to_s
puts 'Which station are you at?' 
station1 = gets.chomp.to_s
puts 'Which line do you need to be on?'
line2 = gets.chomp.to_s
puts 'Which station are you trying to get to?' 
station2 = gets.chomp.to_s

directions line1, station1, line2, station2


binding.pry






