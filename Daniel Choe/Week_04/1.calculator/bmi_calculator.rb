# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

# BMI calculator
print "What is your weight (in Kg)? "
weight = gets.chomp.to_f
print "What is your height (in m)? "
height = gets.chomp.to_f

height_squared = height ** 2
bmi = weight / height_squared
puts "Your BMI is #{ bmi.round(2) }"

if bmi > 25
  puts "you are overweight"
elsif bmi > 20 and bmi <= 26
  puts "your weight is in a healthy range"
else
  puts "you are underweight"
end
