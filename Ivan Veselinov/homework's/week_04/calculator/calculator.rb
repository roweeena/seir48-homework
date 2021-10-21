def show_menu
  puts "Calculator".center(80) # TODO: Check out .center to make this look nicer
  puts "=-" * 40 # Budget horizontal dividing line
  puts "[a] - Sum".center(5)
  puts "[b] - Subtract".center(5)
  puts "[c] - Sqr".center(5)
  puts "[d] - Devide".center(5)
  puts "[e] - Sqrt".center(5)
  puts "[f] - Exponents".center(5)
  puts "[q] - Quit".center(5)
  print "Enter your choice: ".center(5)
end

show_menu
result = 0
menu_choice = gets.chomp.downcase
until menu_choice == 'q'
  case menu_choice
when 'a'
  puts "Choose 2 values to be sum"
  a = gets.chomp.to_i
  b = gets.chomp.to_i
  result = a + b
  puts " result is #{a} + #{b} = #{result}"
when 'b'
  puts "Choose 2 values to Subtraction "
  a = gets.chomp.to_i
  b = gets.chomp.to_i
  result = a - b
  puts " result is #{a} - #{b} = #{result}"
when 'c'
  puts "Choose 2 values to be sqr"
  a = gets.chomp.to_i
  b = gets.chomp.to_i
  result = a * b
  puts " result is #{a} * #{b} = #{result}"
when 'd'
  puts "Choose 2 values to be Devide"
  a = gets.chomp.to_f
  b = gets.chomp.to_f
  result = a / b
  puts " result is #{a} / #{b} = #{result}"
when 'e'
  puts "Choose a value to be sqrt"
  a = gets.chomp.to_i
  result = Math.sqrt(a)
  puts " result is #{a} = #{result}"
when 'f'
  puts "Choose a value to be Exponents"
  a = gets.chomp.to_i
  result = a ** a
  puts " result is #{a} = #{result}"
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end


puts "Thanks for using this crappy calculator."
