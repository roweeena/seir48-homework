def show_menu
puts " Calculator"
puts "=>" *40
puts "[a] - Addition"
puts "[m] - Multiply"
puts "[d] - Divide"
puts "[s] - Subtract"
# TODO: Add the other operations here (multiply, divide, subtract)
puts "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "You chose addition!"
    puts "Addition coming soon"

  when 'm'
    puts "You chose multiplication!"
    puts "Multiplication coming soon"

  when 'd'
    puts "You chose division!"
    puts "Division coming soon"

  when 's'
    puts "You chose subtract!"
    puts "Subtraction coming soon"
end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator."
