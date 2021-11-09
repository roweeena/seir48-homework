# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
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

def show_menu
  puts "Calculator" #TOdo: check out .center to make this look nicer
  puts "<>" * 40
  puts "[a] - Addition" #TODO: Add the other operations here (multiply divide, subtract)
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[sqrt] - Square Root"
  puts "[exp] - Exponent"
  puts "[mort] - Mortgage Calculator"
  puts "[bmi] - BMI Calculator"
  puts "[trip] - Trip Calculator"
  puts "[q] - Quit"
  print "Enter your choice: "
end

def addition
  puts "Please enter the first number: "
  first_num = gets.to_i
  puts "Please enter the second number: "
  second_num = gets.to_i
  puts "#{ first_num } + #{ second_num} = #{ first_num + second_num }"
end

def subtract
  puts "Please enter the first number"
  first_num = gets.to_i
  puts "Please enter the second number"
  second_num = gets.to_i
  puts "#{ first_num } - #{ second_num } = #{ first_num - second_num }"
end

def divide
  puts "Please enter the first number: "
  first_num = gets.to_i
  puts "Please enter the second number: "
  second_num = gets.to_i
  puts "#{ first_num } / #{ second_num } = #{ first_num / second_num }"
end

def multiply
  puts "Please enter the first number: "
  first_num = gets.to_i
  puts "Please enter the second number: "
  second_num = gets.to_i
  puts "#{ first_num } * #{ second_num } = #{ first_num * second_num }"
end

def square_root
  puts "Please enter a value"
  value = gets.to_i
  puts "The square root of #{ value } is #{ Math.sqrt(value) }"
end

def exponent
  puts "Please enter a value"
  value = gets.to_i
  puts "Please enter an exponent"
  exp = gets.to_i
  puts "#{ value } to the power of #{ exp } equals #{ value ** exp}"
end

def mortgage
  puts "Enter principal loan amount: "
  p = gets.to_f
  puts "Enter interest rate: "
  r = gets.to_f/100
  puts "Enter term (number of years): "
  t = gets.to_f
  n = 12
  puts "Your monthly repayment will be #{ p * ( r/n ) * (1 + r/n ) ** n / ((1 + r)**n - 1)}"
end

def bmi
  puts "Enter weight (kg): "
  weight = gets.to_f
  puts "Enter height (cm): "
  height = gets.to_f
  puts "Your BMI is #{ ((weight/height)/height)* 10000 }"
end

def trip
  puts "Enter distance of trip: "
  distance = gets.to_f
  puts "Enter the kilometres per litre: "
  kpl = gets.to_f
  puts "Enter the fuel price: "
  price = gets.to_f
  puts "Enter the speed: "
  speed = gets.to_f
  puts "The trip time will be #{ distance / speed} hours and will cost $#{ (distance/kpl)*price}"

  # ## Trip Calculator
  # Calculate a trip time and cost given inputs for
  # - distance
  # - miles per gallon
  # - price per gallon
  # - speed in miles per hour
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    addition
  when 's'
    subtract
  when 'd'
    divide
  when 'm'
    multiply
  when 'sqrt'
    square_root
  when 'exp'
    exponent
  when 'mort'
    mortgage
  when 'bmi'
    bmi
  when 'trip'
    trip
  else
    puts "Please select a valid input"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end
