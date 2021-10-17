def show_menu
  puts "=-" * 10
  puts "Calculator"
  puts "=-<>" * 30
  puts "[a] - Addition"
  puts "[b] - Subtraction"
  puts "[c] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponentiation"
  puts "[f] - Square Root"
  puts "[q] - Quit"
  print "Enter your choice:"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice
  when "a"
    print "Enter first number:"
    num1 = gets.chomp.to_f
    print "Enter second number:"
    num2 = gets.chomp.to_f
    result = num1 + num2
    puts "#{num1} + #{num2} = #{result}"
  when "b"
    print "Enter first number:"
    num1 = gets.chomp.to_f
    print "Enter second number:"
    num2 = gets.chomp.to_f
    result = num1 - num2
    puts "#{num1} - #{num2} = #{result}"
  when "c"
    print "Enter first number:"
    num1 = gets.chomp.to_f
    print "Enter second number:"
    num2 = gets.chomp.to_f
    result = num1 * num2
    puts "#{num1} * #{num2} = #{result}"
  when "d"
    print "Enter first number:"
    num1 = gets.chomp.to_f
    print "Enter second number:"
    num2 = gets.chomp.to_f
    result = num1 / num2
    puts "#{num1} / #{num2} = #{result}"
  when "e"
    print "Enter first number:"
    num1 = gets.chomp.to_f
    print "Enter second number:"
    num2 = gets.chomp.to_f
    result = num1 ** num2
    puts "#{num1} to the power #{num2} is #{result}"
  when "f"
    print "Enter a number:"
    num1 = gets.chomp.to_f
    result = Math.sqrt(num1)
    puts "The square root of #{num1} is #{result}"
  else
    puts "Invalid selection, You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this Calculator."
