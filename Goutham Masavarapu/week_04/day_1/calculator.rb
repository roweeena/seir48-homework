# # Calculator
def show_menu
  puts "Calculator" # TODO: Check out .center to make this look nicer
  puts "=-" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  # TODO: Add the other operations here (multiply, divide, subtract)

  puts"(s) - Subtraction"
  puts"(m) - Multipication"
  puts"(d) - Division"
  puts"(sq) - Squareroot"
  puts"(e) - Exponent"
  puts"(q) - Quit"
  puts"(bmi) - BMI"
  # receive a user imput
  print "Enter your choice: "
  user_choice = gets().chomp()

  # return whatever the user typed.
  return user_choice

end

#If there are no parameters, use parenthesis.
choice = show_menu() # => "a"

# if the choice is a, add some numbers

def addition
  # defining addition
  print "What is your first number?"
  first_num = gets().to_i  #turns a string into an integer

  print "What is the second number?"
  second_num = gets().to_i

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

def subtraction
  print "What is your first number?"
  first_num = gets().to_i  #turns a string into an integer

  print "What is the second number?"
  second_num = gets().to_i

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

def multipaction
  print "What is your first number?"
  first_num = gets().to_i  #turns a string into an integer

  print "What is the second number?"
  second_num = gets().to_i

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

def division
  print "What is your first number?"
  first_num = gets().to_i  #turns a string into an integer

  print "What is the second number?"
  second_num = gets().to_i

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

def square_root
  print "Enter the number you would like the square root of: "
  num = gets().to_i  #turns a string into an integer

  result = Math.sqrt (num)
  puts "The square root of #{num} = #{result}"
end

def exponent
  print "What is your base number?"
  first_num = gets().to_i  #turns a string into an integer

  print "To the power of: "
  second_num = gets().to_i

  result = first_num ** second_num
  puts "#{first_num} ^ #{second_num} = #{result}"
end

def bmi
  print "What is your height (in metres)?"
  height = gets().to_f  #turns a integer into a string

  print "What is your weight (in kgs)? "
  weight = gets().to_f

  result = ( ( weight / height ) / (height) ).to_s
  puts "Your BMI is: #{result}"
end


#Keep showing the menu and doing operations until the variable choice is the string "q".
show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a' then addition()
  #   puts "You chose addition!"
  #   puts "Addition coming soon" # TODO: actually do the addition
  # # add additonal `when` clauses for the other menu options
  # else
  #   puts "Invalid selection. You idiot."


    when "s" then subtraction()
    when "m" then multipaction()
    when "d" then division()
    when "sq" then square_root()
    when "e" then exponent()
    when 'bmi' then bmi()
  end

end

puts "Thanks for using this crappy calculator."
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
