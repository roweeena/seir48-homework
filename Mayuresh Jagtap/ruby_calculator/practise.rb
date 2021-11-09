# The Fortune Teller
# Why pay a fortune teller when you can just program your fortune yourself?
#
# Store the following into variables: number of children, partner's name, geographic location, job title.
# Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

# print "Numbers of children:"
# num_kids= gets.chomp.to_i
# # puts "You have #{num_kids} kids."
#
#
# print "Partner's name:"
# partner_name= gets.chomp
# # puts "Your partner's name is #{partner_name}."
#
#
# print "Future city:"
# future_city= gets.chomp
# # puts "Your future city is #{future_city}."
#
#
# print "Job title:"
# job_title= gets.chomp
# puts "You will be a #{job_title} in #{future_city}, and married to #{partner_name} with #{num_kids} kids."


# The Age Calculator
# Forgot how old someone is? Calculate it!
#
# Store the current year in a variable.
# Store their birth year in a variable.
# Calculate their 2 possible ages based on the stored values.
# Output them to the screen like so: "They are either NN or NN", substituting the values.

# print "Current Year: "
# today= gets.chomp.to_i
# # puts "This is #{today}."
#
# print "Year of birth: "
# birth_year= gets.chomp.to_i
# # puts "I was born in #{birth_year}."
#
#
# age = today.to_i - birth_year.to_i
# puts "Today my age is #{age} years."



# The Lifetime Supply Calculator
# Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
#
# Store your current age into a variable.
# Store a maximum age into a variable.
# Store an estimated amount per day (as a number).
# Calculate how many you would eat total for the rest of your life.
# Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

# print "Current age: "
# current_age= gets.chomp.to_i
# puts "#{current_age}"
#
# print "Max age: "
# max_age= 99
# puts "#{max_age}"
#
# years_left= max_age - current_age
# puts "Years to go #{years_left}"
#
# days_left= 365 * years_left
#
# daily_feed= 5
#
# lifetime_feed= days_left * daily_feed
# puts "You will need #{lifetime_feed} to last you until the ripe old age of #{max_age}."


# The Geometrizer
# Calculate properties of a circle, using the definitions here.
#
# Store a radius into a variable.
# Calculate the circumference based on the radius, and output "The circumference is NN".


print "Radius of circle: "
radius= gets.chomp.to_i
circumference_of_circle= 2 * 3.14 * radius
puts "Circumference of circle is #{circumference_of_circle}."


# Calculate the area based on the radius, and output "The area is NN".
# The Temperature Converter
# It's hot out! Let's make a converter based on the steps here.
#
# Store a celsius temperature into a variable.
# Convert it to fahrenheit and output "NN°C is NN°F".
# Now store a fahrenheit temperature into a variable.
# Convert it to celsius and output "NN°F is NN°C."
