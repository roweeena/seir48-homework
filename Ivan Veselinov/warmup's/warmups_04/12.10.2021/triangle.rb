# Is this a triangle?
### Task:
# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
#
# ### Examples
# ```
#   is_triangle(1,2,2) #true
#   is_triangle(5,1,2) #false
#   is_triangle(4,2,3) #true
#
# ```
#
# ## Bonus
# Make it pretty and create a menu that will allow for user input

# def is_triangle

# ////////////////////////////////////////////////////////////////////////////////
#
puts "This is triangle exercise".center(80)
puts "<>" *40
puts "Please enter 3 values a, b and c"

a = gets.chomp.to_i
c = gets.chomp.to_i
b = gets.chomp.to_i
puts "=-" * 40

if  a + b > c && b + c > a && a + c = b
  puts "You have a triangle your inputs are left side: #{a}, right side: #{b} and height: #{c}", true
else
puts "You dont have a triangle, your inputs are left side: #{a}, right side: #{b} and height: #{c}", false
end

# v2
# def is_triangle (a, b, c)
#
#
#
# max = [a, b, c].max # find max in the array
# sum = a + b + c
#
# puts sum - max > max
#
# end
# is_triangle(1,2,2) #true
# is_triangle(5,1,2) #false
# is_triangle(4,2,3) #true



# v3
#
# def menu
#   puts "//_\\\\" *10
#   puts "Triangles".center(80)
#   puts ">><<" *12
#   print "[Input values, [q] to quit: "
#
# end
#
# menu
#
# user_choice = gets[0].downcase
#
# until user_choice == "q"
#
#   print "Enter a first number: "
#   x = gets.chomp.to_i
#
#   print "Enter a secound number: "
#   y = gets.chomp.to_i
#
#   print "Enter a last number: "
#   z = gets.chomp.to_i
#
#   is_triangle(x, y, z)
#
#   menu
#   user_choice = gets[0].downcase
# end
#
# puts "Thank you for useing our program"
#
