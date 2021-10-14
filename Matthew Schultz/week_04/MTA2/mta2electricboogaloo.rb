# # MTA Lab
#
# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.
#
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
#
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

new_journey = 'y'

starting_line = ''
starting_station = ''
finish_line = ''
finish_station = ''

journey_record = []


nline = ['times square', '34th', '28th', '23rd', 'union square', '8th']
lline = ['8th', '6th', 'union square', '3rd', '1st']
sixline = ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']


while new_journey == 'y'
  # INTRODUCTION
  puts "=="*16
  puts "🚂   MTA 2 - Electric Boogaloo"
  puts "=="*16
  puts "Welcome to the MTA travel planner"
  puts "Please input your starting line and station"
  print "Line (N, L, 6): "

  # GET STATIONS AND CONVERT LINES
  starting_line = gets.chomp.downcase
  case starting_line
  when 'n'
    starting_line = nline
  when 'l'
    starting_line = lline
  when '6'
    starting_line = sixline
  end
  print "Station : "
  starting_station = gets.chomp.downcase
  puts "Please input your desired destination"
  print "Line (N, L, 6): "
  finish_line = gets.chomp.downcase
  case finish_line
  when 'n'
    finish_line = nline
  when 'l'
    finish_line = lline
  when '6'
    finish_line = sixline
  end
  print "Station: "
  finish_station = gets.chomp.downcase

  # IF ON THE SAME LINE
  i = starting_line.index(starting_station)
  x = starting_line.index(finish_station)
  if starting_line == finish_line
    if starting_line.index(starting_station) > starting_line.index(finish_station)
      while i > x
        i = i - 1
        journey_record.push starting_line[i]
      end
    else
      while i < x
        i = i + 1
        journey_record.push starting_line[i]
      end
    end
  #IF ON DIFFERENT LINES
  #GET JOURNEY TO UNION SQUARE

  else
    y = starting_line.index('union square')
    j = finish_line.index('union square')
    z = finish_line.index(finish_station)
    if starting_line.index(starting_station) > starting_line.index('union square')
      while i > y
        i = i - 1
        journey_record.push starting_line[i]
      end
    else
      while i < y
        i = i + 1
        journey_record.push starting_line[i]
      end

    # GET JOURNEY TO FINISH STATION

    if finish_line.index('union square') > finish_line.index(finish_station)
      while j > z
        j = j - 1
        journey_record.push finish_line[j]
      end
    else
      while j < z
        j = j + 1
        journey_record.push finish_line[j]
      end
    end
  end
  end

  # PRINT THE JOURNEY INSTRUCTIONS
  puts "Your journey will take you through :"
  p journey_record
  stops = journey_record.size
  puts "You will have a total of #{stops} stops."

  # ALLOW PLAYER TO CHOOSE NEW TRIP

  puts "Would you like to plan another trip? (y/n)"
  new_journey = gets[0].downcase
end


# /////////TO DO LIST//////////////////////////////////////////////////////////
# Split new_journey into before and after Union Square
# Make the instructions more readable
# Fix it so that its not all lowercase
# Sort out issue with functions
# Fix it if user puts in station or line that doesnt exist
