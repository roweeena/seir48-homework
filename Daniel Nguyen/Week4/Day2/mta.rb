require "pry"

# '$' = global variable
$subway = {
  '6' => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ],
  'L' => [ "8th", "6th", "Union Square", "3rd", "1st" ],
  'N' => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
}

# Returns an array of a single hash containing the line and the stops
# e.g. single_line_trip 'L', '3rd', '8th'
# returns [ { 'L' => [ "3rd", "Union Square", "6th", "8th" ] } ]
def single_line_trip (line, station_from, station_to)
  index_from = $subway[line].index(station_from);
  index_to = $subway[line].index(station_to);

  if station_from == station_to
    {}
  elsif index_from < index_to
    {
      :line => line,
      :stops => $subway[line][(index_from..index_to)]
    }
  else
    {
      :line => line,
      :stops => $subway[line][(index_to..index_from)].reverse
    }
  end
end

# Returns an array of two single-line-trip hashes
# e.g. [ { first_leg }, { second_leg } ]
def multi_line_trip (line_from, station_from, line_to, station_to)
  # A multi-line trip always transfers at Union Square
  [
    single_line_trip(line_from, station_from, "Union Square"),
    single_line_trip(line_to, "Union Square", station_to)
  ]
end

# Returns an array, with a hash for each leg of the trip
def plan_trip (line_from, station_from, line_to, station_to)
  if line_from == line_to
    [ single_line_trip(line_from, station_from, station_to) ]
  else
    if station_from == "Union Square"
      [ single_line_trip(line_to, "Union Square", station_to) ]
    elsif station_to == "Union Square"
      [ single_line_trip(line_from, station_from, "Union Square") ]
    else
      multi_line_trip line_from, station_from, line_to, station_to
    end
  end
end

def log_trip (trip)
  total_stops = 0

  line = trip[0][:line]
  stops = trip[0][:stops]
  puts "You must travel through the following stops on the #{ line } line: #{ stops.join(', ') }."
  total_stops += stops.size

  # If there is another leg
  if trip.size > 1
    line = trip[1][:line]
    stops = trip[1][:stops].drop 1  # removes the repeated Union Square
    puts "Change at Union Square to the #{ line } line."
    puts "Your journey continues through the following stops: #{ stops.join(', ') }."
    total_stops += stops.size
  end

  puts "#{ total_stops } stops in total."
end

binding.pry
