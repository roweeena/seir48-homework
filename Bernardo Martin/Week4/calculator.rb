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
def show_menu
  puts "Calculator".center(80) # TODO: Check out .center to make this look nicer
  puts "//" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Substract"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[e] - Exponents"
  puts "[sr] - Square Roots"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  print "Enter a number: "
  num_one = gets.to_f
  unless (menu_choice == 'sr' || menu_choice == 'e')
    print "Enter a number: "
    num_two = gets.to_f
  end
  case menu_choice
  when 'a'
    puts "You chose addition!"
    sum = num_one + num_two
    puts "Your addition is equal to: #{ sum }"
  when 's'
    puts "You chose substaction"
    substaction = num_one - num_two
    puts "Your substraction is equal to: #{substaction}"
  when "m"
    puts "You chose to multply"
    mult = num_one * num_two
    puts "Your result is #{mult}"
  when "d"
    puts "You chose to dive"
    div = num_one / num_two
    puts "Your division result is #{div}"
  when "e"
    puts "You chose to expose"
    exp = num_one * num_one
    puts "Your exponent result is #{exp}"
  when "sr"
    puts "You chose to get the Square Root"
    square = Math.sqrt(num_one)
    puts "Your square root result is #{square}"
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator."

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
