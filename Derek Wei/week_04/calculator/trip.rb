# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

puts "==" * 10
puts "Trip Calculator".center(20)
puts "==" * 10

print "What is the distance of your trip in miles? "
distance = gets.to_f

print "How many miles per gallon? "
miles_per_gallon = gets.to_f

print "How many $ per gallon of fuel? "
price_per_gallon = gets.to_f

print "What speed are you going in miles per hour? "
speed = gets.to_f

def trip_calculate (distance, miles_per_gallon, price_per_gallon, speed)
  time = distance / speed
  no_of_gallons = distance / miles_per_gallon
  price = no_of_gallons * price_per_gallon
  puts "The time for your trip is #{ time.round(2) } hours and it will cost $#{ price.round(2) }"
end

trip_calculate(distance, miles_per_gallon, price_per_gallon, speed)
