# # # Is this a triangle?
# # ### Task:
# # Implement a function that accepts 3 integer values a, b, c.
# # The function should return true if a triangle can be built with the
# # sides of given length and false in any other case.
# #
# # ### Examples
# # ```
# #   is_triangle(1,2,2) #true
# #   is_triangle(5,1,2) #false
# #   is_triangle(4,2,3) #true
# # ```

def is_triangle (a, b, c)


  max = [a,b,c].max


sum = a +b+c

puts sum - max -max > max


end#
# 1) Pseudocode Inputs and Outputs
# Given 3 sides of a possible triangle (inputs):
# a, b, c
# Returns a boolean (output):true/false
# isTriangleValid
# //whether or not the sides can create a valid triangle
#
# 2) Pseudocode the Formula / Logic
# #
#         There is a formula/ condition that the biggest side of a
# triangle is less than the sum of other two sides of the triangle.
#
# isValidTriangle = (longestSide < sumOfOthers)
#
#     Something small you are forgetting is:
#
# sumOfOthers = sumOfAll - longestSide
#
#     Now you have the real formula:
#
# isTriangleValid = (longestSide < sumOfAll - longestSide)
#
#     Since this is now in terms of solvable variables, solve:
#
# sumOfAll = a+b+c
# longestSide = max(a,b,c)
#
#
#
# #
# # ## Bonus
# # Make it pretty and create a menu that will allow for user input
