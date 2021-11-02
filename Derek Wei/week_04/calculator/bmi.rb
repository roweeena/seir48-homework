# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

puts "==" * 10
puts "BMI Calculator".center(20)
puts "==" * 10

print "What is your height in cm? "
height = gets.to_f

print "What is your weight in kg? "
weight = gets.to_f

def bmi (height, weight)
  result = weight / ( ( height / 100 ) ** 2 )
  puts "Your BMI is #{ result.round(1) }."
end

bmi(height, weight)
