# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

# Trip calculator
puts "What distance do you want to travel (miles)? "
distance = gets.chomp.to_f
puts "What is the price of gas per gallon? "
price = gets.chomp.to_f
puts "How many miles per gallon does your vehicle consume? "
miles = gets.chomp.to_f
puts "what is your speed in miles per hour?"
speed = gets.chomp.to_f

trip_time = distance / speed
cost = (distance / miles) * price
puts "your trip time is #{ trip_time.round(2) } hours and will cost $#{ cost.round(2) }"
