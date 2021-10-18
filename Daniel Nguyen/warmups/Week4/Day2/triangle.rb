def is_triangle (a, b, c)
  a + b > c && a + c > b && b + c > a
end

# is_triangle(1,2,2) #true
# is_triangle(5,1,2) #false
# is_triangle(4,2,3) #true

def show_menu
  puts "Type 'q' to quit"
  puts "Or press Return to continue"
end

show_menu
input = gets[0].downcase

until input == 'q'
  puts "Enter three lengths:"

  a = gets.to_i
  b = gets.to_i
  c = gets.to_i

  if is_triangle(a, b, c)
    puts "Yes. #{a}, #{b} and #{c} can form a triangle."
  else
    puts "No. #{a}, #{b} and #{c} can't form a triangle."
  end

  puts ""
  show_menu
  input = gets[0].downcase
end
