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

require 'pry'

$mta = {
  "N line" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  "L line" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  "6 line" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

$line_n = $mta["N line"]
$line_l = $mta["L line"]
$line_6 = $mta["6 line"]

def print_nodes (first_node, last_node, line)

  line_lowercase = line.map {|e| e.downcase}
  a = line_lowercase.index(first_node.downcase)
  b = line_lowercase.index(last_node.downcase)
  if a <= b
    return line[a..b]
  else
    return line.reverse[(line.count - a)..(line.count - b)]
  end
end

def plan_trip (start_line, start_node, end_line, end_node)

  start_line_name = $mta.key(start_line)
  end_line_name = $mta.key(end_line)

  if start_line == end_line
    nodes = print_nodes(start_node, end_node, start_line)
    no_of_stops = nodes.count
    puts "You must travel through the following stops on the #{ start_line_name }: #{ nodes.join(', ')}"
    puts "#{ no_of_stops } stops in total."
  else
    nodes_1 = print_nodes(start_node, "Union Square", start_line)
    nodes_2 = print_nodes("Union Square", end_node, end_line)
    no_of_stops = (nodes_1 + nodes_2).count
    puts "You must travel through the following stops on the #{ start_line_name }: #{ nodes_1.join(', ')}"
    puts "Change at Union Square"
    puts "Your journey continues through the following stops on the #{ end_line_name }: #{ nodes_2.join(', ')}"
    puts "#{ no_of_stops } stops in total."
  end
end

def choose_line

  puts "[N] - Line N"
  puts "[L] - Line L"
  puts "[6] - Line 6"

  line = gets[0].downcase
  case line
  when 'n'
    return $line_n
  when 'l'
    return $line_l
  when '6'
    return $line_6
  when 'q'
    return 'q'
  else
    puts "Please choose a line from below:"
    choose_line()
  end
end

def choose_node(line)

  node = gets.downcase.chomp
  line_lowercase = line.map {|e| e.downcase}
  if line_lowercase.include?(node) | (node == 'q')
    return node
  else
    puts "Please type a start node from below with no spelling errors:"
    p line
    choose_node(line)
  end
end

def sub_menu

    puts "Please choose a start line or [Q] to go back to main menu"
    start_line = choose_line()
    if start_line == 'q'
      return
    end

    puts "Please choose a start node from below or [Q] to go back to main menu"
    puts "#{ start_line }"
    start_node = choose_node(start_line)
    if start_node == 'q'
      return
    end

    puts "Please choose an end line or [Q] to go back to main menu"
    end_line = choose_line()
    if end_line == 'q'
      return
    end

    puts "Please choose an end node from below or [Q] to go back to main menu"
    puts "#{ end_line }"
    end_node = choose_node(end_line)
    if end_node == 'q'
      return
    end

    plan_trip(start_line, start_node, end_line, end_node)
    puts "Input [Q] to go back to main menu or any other key to plan another trip"


end

def main_menu

  puts "=+="*10
  puts "MTA Trip Planner".center(30)
  puts "=+="*10
  puts "Input something to start planning your trip or [Q] to quit:"
  user_input = gets[0].downcase
  until user_input == 'q'
    sub_menu
    user_input = gets[0].downcase
  end
  main_menu # infinite loop, can't quit using Q
end

main_menu
