# Is this a triangle?
### Task:
#Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.




def is_triangle (a, b,c)

  # puts a + b > c && b + c > a && a + c > b => one line of code, works
  #another way:
  max = [a, b, c].max # find value in the array
  sum = a + b + c
  puts sum - max > max

end

  # is_triangle(1,2,2) #true
  # is_triangle(5,1,2) #false
  # is_triangle(4,2,3) #true


## Bonus
#Make it pretty and create a menu that will allow for user input

def menu
  puts "//_\\\\" * 10
  puts "TRIANGLES".center(50) # centers according to the width passed as an argument
  puts ">><<" * 12
  print "[Input] values, [q] to quit: "

end

menu
user_choice = gets[0].downcase

until user_choice == "q"

    print "Enter a number: "
    x = gets.chomp.to_i
    print "Enter another number: "
    y = gets.chomp.to_i
    print "Enter the last number: "
    z = gets.chomp.to_i

    is_triangle(x, y, z)

    menu
    user_choice = gets[0].downcase
  end

  puts "Thank you for playing"
