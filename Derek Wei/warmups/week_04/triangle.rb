# # Is this a triangle?
# ### Task:
# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
#
# ### Examples
# ```
#   is_triangle(1,2,2) #true
#   is_triangle(5,1,2) #false
#   is_triangle(4,2,3) #true
# ```
#
# ## Bonus
# Make it pretty and create a menu that will allow for user input

puts "==="*10
puts "Is it a triangle".center(30)
puts "==="*10

print "Enter length of first side: "
a = gets.to_f

print "Enter length of second side: "
b = gets.to_f

print "Enter length of third side: "
c = gets.to_f

def is_triangle (a, b, c)
  if a >= b + c
    puts "nope"
    return false
  elsif b >= a + c
    puts "nope"
    return false
  elsif c >= a + b
    puts "nope"
    return false
  else
    puts "yep"
    return true
  end
end

is_triangle(a, b, c)
