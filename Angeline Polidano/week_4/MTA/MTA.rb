require'pry' # < script src= "pry.js"></script>


# MTA Lab

#
 # * The program takes the line and stop that a user is getting on at and the line
 # and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

def show_menu
puts "MTA RAILWAY".center(80)
puts "<<<<>>>>" * 40

puts "[n] => n Line"
puts "[l] => l line"
puts "[t] => 6 line"
puts "[q] => Quit"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice

when 'n'
  n = "34th", "n-28th", "n-23rd", "Union Square", "n-8th"
  stations = []
  stations = n[0..3]
  puts stations
  puts "You have arrived at Union Sqaure, you have one stop left, the next train for 8th will arrive shortly"
  puts "You have arrived at your destination #{n[4]}"
  puts " total stops #{n.length}"


when 'l'
  l = "l-8th", "6th", "Union-Sqaure", "3rd", "1st"
  stations = []
  stations = l[0..2]
  puts stations
  puts "You have arrived at Union Sqaure, you have two stops left, the next train for the 1st will arrive shortly"
  puts "You have arrived at your destination #{n[4]}"
  puts " total stops #{l.length}"

when 't'
  t = "Grand Central", "t-33rd", "t-28th", "t-23rd", "Union Square", "Astor Place."
  stations = []
  stations = t[0..4]
  puts stations
  puts "you have arrived at Union Square, there is one stop left, the next train for Astor Place will arrive shortly"
  puts "you have arrived at your destination #{t[5]}"
  puts " total stops #{t.length}"

else
  puts "sorry, that's not a valid entry"
end

show_menu
menu_choice = gets.chomp.downcase
end

puts "Thank you for choosing to travel with us!"




binding.pry #Pause here and take me to pry
#   here are 3 subway lines:
#      N_stops = ["Times Square", "34th", "N-28th", "N-23rd", "Union Square", "N-8th"]
#      L_stops = ["L-8th", "6th", "Union Square", "3rd", "1st"]
#      6_stops = ["Grand Central", "33rd", "6-28th", "23rd", "Union Square", "Astor Place."]
#
#
#
#
#
#
#     * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
#   * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
#
#
#
# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.
#
# #### Activity
# * Create a program that models a simple subway system.
#
#
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
#
#
#
#
#
