
def is_triangle (a, b, c)

  # puts (a+b>c) && (a+c>b) && (b+c>a)

  max = [a, b, c].max

  sum = a + b + c

  puts sum - max > max

end
  is_triangle(1,2,2)
  is_triangle(5,1,2)
  is_triangle(4,2,3)

def show_menu
  puts "=-" * 40
  puts "Is this a triangle?".center(85)
  puts "=-" * 40
  puts "[s] - Start"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets[0].chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 's'
    print "Enter value of side A:"
    a = gets.chomp.to_i
    print "Enter value of side B:"
    b = gets.chomp.to_i
    print "Enter value of side C:"
    c = gets.chomp.to_i

    if (a+b>c) && (a+c>b) && (b+c>a)
      puts "is_triangle(#{a},#{b},#{c}) #true"
    else
      puts "is_triangle(#{a},#{b},#{c}) #false"
    end

  else
    puts "Invalid selection."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator."
