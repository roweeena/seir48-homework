require 'pry'
# #### Activity
# * Create a program that models a simple subway system.
#
# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

@subway = {
  "N" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

def single_line(line, start, stop)

  line_array = @subway[line]
  start_index = line_array.index(start)
  stop_index = line_array.index(stop)

  if start_index < stop_index

    journey_array = line_array.slice(start_index + 1 , stop_index)

  else

    journey_array = line_array.slice(stop_index, start_index)
    journey_array.reverse!

  end



  return journey_array
end

def journey_planner (start_line, start, stop_line, stop)

  multiple_lines = false

  if start_line == stop_line

    journey_array = single_line(start_line, start, stop)

  else

    multiple_lines = true

    first_leg = single_line(start_line, start, 'Union Square')
    second_leg = single_line(stop_line, 'Union Square', stop)

  end

  if multiple_lines

    puts "On the first leg of your journey, you will travel from #{ start } to Union Square Station"
    puts "You will be passing through the #{ first_leg.join(', ')} stations. There will be #{ first_leg.count } stops"
    puts "Change to the #{ stop_line } line at Union Square Station"
    puts "On the second leg of your journey, you will travel from Union Square Station to #{ stop }"
    puts "You will be passing through the #{ second_leg.join(', ')} stations. There will be #{ second_leg.count } stops"

  else

    puts "You are travelling on the #{ start_line } line from #{ start } Station to #{ stop} Station"
    puts "You will be passing through the #{ journey_array.join(', ')} stations"
    puts "There will be #{ journey_array.count } stops"

  end
end

journey_planner( 'N', 'Times Square', '6', 'Grand Central')

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
#
#
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
