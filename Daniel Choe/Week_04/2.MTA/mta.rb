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

# Lines and Stations.
train_map = {
"N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"L" => ["8th", "6th", "Union Square", "3rd", "1st"],
"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

# Get input from the user.

# function which takes the starting point and destination.
# prints out the steps that must be taken.

# #a function to traverse line N
# def travel (a, b)
#   # a is the starting point
#   # b is the ending points
#   stations = []
#   # traversing the line forwards
#   if N.index(b) > N.index(a)
#     stations.push(N[N.index(a) + 1 .. N.index(b)])
#   else
#     n_rev = N.reverse
#     stations.push( n_rev[n_rev.index(a) + 1 .. n_rev.index(b)] )
#   end
#   # convert array to strings.
#   stations_str = stations.join(", ")
#
#   # Output
#   puts "You must travel through the following stops on the N line: #{ stations_str } "
#   puts "#{ stations[0].length } stops in total."
# end
#
# travel("Times Square", "23rd")
# travel("23rd", "Times Square")




#function to traverse all lines.
def travel (a, b, c, d)
  # a is the starting line
  # b is the starting station
  # c is the ending line
  # d is the ending station

  train_map = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"] }

  stations_a = []
  stations_b = []

  #Different travel options
  #Traverse one line forwards and backwards.

  #Traverse forwards on one line and forwards on the other.
  if train_map[a].index(b) < train_map[a].index("Union Square") and train_map[c].index(d) > train_map[c].index("Union Square") and a != c
    stations_a.push( train_map[a][train_map[a].index(b) + 1 .. train_map[a].index("Union Square")] )
    stations_b.push( train_map[c][train_map[c].index("Union Square") + 1 .. train_map[c].index(d)] )
    stations_a_str = stations_a.join(", ")
    stations_b_str = stations_b.join(", ")
    puts "You must travel through the following stops on the #{ a } line: #{ stations_a_str }"
    puts "Change at Union Square"
    puts "You must travel through the following stops on the #{ c } line: #{ stations_b_str }"
    puts "#{ stations_a[0].size + stations_b[0].size } stops in total."
  end

  #Traverse forwards on one line and backwards on the other.
  if train_map[a].index(b) < train_map[a].index("Union Square") and train_map[c].index(d) < train_map[c].index("Union Square") and a != c
    stations_a.push( train_map[a][train_map[a].index(b) + 1 .. train_map[a].index("Union Square")] )
    line_rev = train_map[c].reverse   #travelling backwards on the other line so need to reverse.
    stations_b.push( line_rev[line_rev.index("Union Square") + 1 .. line_rev.index(d)] )
    stations_a_str = stations_a.join(", ")
    stations_b_str = stations_b.join(", ")
    puts "You must travel through the following stops on the #{ a } line: #{ stations_a_str }"
    puts "Change at Union Square"
    puts "You must travel through the following stops on the #{ c } line: #{ stations_b_str }"
    puts "#{ stations_a[0].size + stations_b[0].size } stops in total."
  end

  #Traverse backwards on one line and forwards on the other.
  

  #Traverse backwards on one line and backwards on the other.


end

travel("N","Times Square","6","Grand Central")







# anchor comment.
