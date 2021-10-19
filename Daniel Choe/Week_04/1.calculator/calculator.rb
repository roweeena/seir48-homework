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

# Addition function
# def addition(*numbers)
#   result = 0
#   for i in 0..numbers.length
#     result += numbers[i].to_i
#   end
#   puts result
# end

# Calculator menu
def show_menu
  puts "Calculator" # TODO: check out method .center to make this look nicer.
  puts "<><><><>" * 10 ## TODO: find a better dividing line.
  puts "[a] - Addition"
  puts "[s] - Subtract"
  puts "[m] - Multiplication"
  puts "[d] - Divide"
  puts "[r] - Square Root"
  puts "[e] - Exponent"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"

  case menu_choice
  # Addition.
  when 'a'
    puts "You chose addition"
    puts "Enter the numbers you would like to add: "

    numbers = gets.chomp.split(" ") #splits converts it to an array.

    result = 0
    for i in 0..numbers.length
      result += numbers[i].to_i
    end
  puts "The sum of your numbers is #{ result }"

  # Subtraction.
  when 's'
    puts "You chose subtraction"
    puts "Enter the numbers you would like to subtract: "

    numbers = gets.chomp.split(" ") #splits converts it to an array of strings.

    result = numbers[0].to_i
    for i in 1..numbers.length
      result -= numbers[i].to_i
    end
    puts "The subtraction of your numbers is #{ result }"

  # Multiplication.
  when 'm'
    puts "You chose multiplication"
    puts "Enter the numbers you would like to multiply: "

    numbers = gets.chomp.split(" ")

    result = 1
    numbers.each do |num|
      result = result * num.to_i
    end

    puts "The multiplication of your numbers is #{ result }"

  # Division.
  when 'd'
    puts "You chose division"
    puts "Enter the numbers you would like to divide: "

    numbers = gets.chomp.split(" ")

    result = numbers[0].to_i

    for i in 1...numbers.length
      result = result / numbers[i].to_i
    end

    puts "The division of your numbers is #{ result }"

  # Square roots.
  when 'r'
    puts "You chose square root"
    puts "Enter the numbers you would like to square root: "

    numbers = gets.chomp.split(" ")
    result = []
    for i in 0...numbers.length
      result.push(numbers[i].to_i ** 0.5)
    end

    puts "The square root of your numbers is #{ result }"

  # Exponents.
  when 'e'
    puts "You chose exponents"
    puts "Enter your base: "
    base = gets.chomp.to_f
    puts "Enter your exponent: "
    exponent = gets.chomp.to_f

    result = base ** exponent

    puts "The exponent of your numbers is #{ result }"

  else
    puts "Invalid selection. You idiot"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"


# puts addition(7,10)
# puts addition(7, 0, 3, 5)
# puts addition(1,2,3,4)
