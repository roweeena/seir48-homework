#
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
#


def show_menu
  puts "Calculator" # TODO: Check out .center to make this look nicer
  puts "=-" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[m] - Multiply"
  puts "[e] - Exponent"
  puts "[sr]= Square Root"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "You chose addition!"
    puts "enter your first number"
    a = gets.chomp.to_i
    puts "enter your second number"
    b = gets.chomp.to_i
    addition = a + b

    puts "the result of #{a} + #{b} is #{addition}"

when 's'
  puts "You chose subtraction!"
  puts "enter your first number"
   a = gets.chomp.to_i
  puts "enter your second number"
  b = gets.chomp.to_i

   subtraction = a - b

puts "the result of #{a} - #{b} is #{subtraction}"


when 'd'
  puts "You chose Division!"
  puts "enter your first number"
   a = gets.chomp.to_i
   puts "enter your second number"
   b = gets.chomp.to_i

   division = a / b

   puts "the result of #{a} / #{b} is #{division}"


when 'm'
  puts "You chose Multiply!"
  puts "enter your first number"
   a = gets.chomp.to_i
   puts "enter your second number"
   b = gets.chomp.to_i

Multiply = a * b

puts "the result of #{a} * #{b} is #{Multiply}"

#### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#

when 'e'
  puts "You chose Exponent!"
  puts "enter your first number"
  a = gets.chomp.to_i
  puts "enter your second number"
  b = gets.chomp.to_i

  Exponent = (a ** b)

puts "the result of #{a} ** #{b} is #{Exponent}"

when 'sr'
  puts "You chose Square Root!"
  puts "enter a number you'd like to find the square root of"
  a = gets.chomp.to_i

square_root =  Math.sqrt(a)

puts "the result of #{a} Math.sqrt(a) is #{square_root}"

     # TODO: actually do the addition
  # add additonal `when` clauses for the other menu options
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator."
