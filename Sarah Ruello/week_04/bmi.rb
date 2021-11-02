def bmi(height, weight)
    result = weight / height**2
    puts "Your BMI is #{result.round(2)}"
end    

puts "Enter your height in metres: "
height = gets.to_f 
puts "Enter your weight in kg: "
weight = gets.to_f 

bmi(height, weight)