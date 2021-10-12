# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
print "Enter your weight in KG: "
weight= gets.chomp.to_f
print "Enter your height in Meters: "
height= gets.chomp.to_f
bmi= weight / (height * height)
puts "Your BMI is #{bmi}"
