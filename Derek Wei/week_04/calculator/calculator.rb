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

def show_menu
  puts "==" * 10
  puts "Calculator".center(20)
  puts "==" * 10 # budget horizontal dividing line
  puts "[A] - Addition"
  puts "[S] - Subtraction"
  puts "[M] - Multiplication"
  puts "[D] - Division"
  puts "[E] - Exponent"
  puts "[R] - Square Root"
  puts "[Q] - Quit"
  print "Enter your choice: "
end

def add
  puts "You chose addition!"
  print "Please enter a number to add: "
  a = gets.to_f
  print "Please enter another number to add: "
  b = gets.to_f
  puts a + b

end

def subtract
  puts "You chose subtraction!"
  print "Please enter a number to subtract from: "
  a = gets.to_f
  print "Please enter another number to subtract: "
  b = gets.to_f
  puts a - b
end

def multiply
  puts "You chose multiplication!"
  print "Please enter a number to multiply: "
  a = gets.to_f
  print "Please enter another number to multiply: "
  b = gets.to_f
  puts a * b
end

def divide
  puts "You chose division!"
  print "Please enter a number to divide: "
  a = gets.to_f
  print "Please enter the divisor: "
  b = gets.to_f
  puts a / b
end

def exponent
  puts "You chose exponentiation!"
  print "Please enter the base: "
  a = gets.to_f
  print "Please enter the exponent: "
  b = gets.to_f
  puts a ** b
end

def square_root
  puts "You chose square root!"
  print "Please enter a number to square root: "
  a = gets.to_f
  puts a ** 0.5
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    add()
  when 's'
    subtract()
  when 'm'
    multiply()
  when 'd'
    divide()
  when 'e'
    exponent()
  when 'r'
    square_root()
  else
    puts "Invalid selection you imbecile."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator prototype."
