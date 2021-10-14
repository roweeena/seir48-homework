# Is this a triangle? 
### Task:
#Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

### Examples

#def is_triangle(a,b,c)
#    puts a + b > c && a + c > b && b + c > a
#end

def is_triangle?(a,b,c)
    [a,b,c].max < [a,b,c].inject(:+)/2.0
  end

  is_triangle?(1,2,2) #true
  is_triangle?(5,1,2) #false
  is_triangle?(4,2,3) #true

## Bonus
# Make it pretty and create a menu that will allow for user input

def menu
    puts "*--" *15
    puts "TRIANGLE CALC"
    puts "*--"
    print "[input] values, [q] to quit: "
end    

menu
user_pick

is_triangle?(a,b,c)



puts " enter a, b and c values"

a=gets.to_i
b=gets.to_i
c=gets.to_i

def is_triangle(a,b,c)


  if a+b > c    
   puts "true"
  elsif a+c>b  
    puts "true"
  elsif b+c>a
    puts "true"
  else
   puts "false"
 end

end
