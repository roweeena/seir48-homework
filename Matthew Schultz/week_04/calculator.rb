def show_menu
  puts "Calculator" # Check out .center to make it look cool
  puts "=-" * 15
  puts "[a] - Addition" # add other options
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[q] - Quit"
  puts "[r] - Square Root"
  puts "[e] - Exponents"
  print "Enter your choice: "
end

show_menu
menu_choice = gets[0].downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Addition"
    print "First number: "
    num1 = gets.to_f
    print "Second number: "
    num2 = gets.to_f
    total = num1 + num2
    puts "The total of your numbers is #{total}"
  when 's'
    puts "Subtraction"
    print "First number: "
    num1 = gets.to_f
    print "Second number: "
    num2 = gets.to_f
    total = num1 - num2
    puts "#{num1} minus #{num2} is #{total}"
  when 'm'
    puts 'Multiplication'
    print "First number: "
    num1 = gets.to_f
    print "Second number: "
    num2 = gets.to_f
    total = num1 * num2
    puts "#{num1} multiplied by #{num2} is #{total}"
  when 'd'
    puts 'Division'
    print "First number: "
    num1 = gets.to_f
    print "Second number: "
    num2 = gets.to_f
    total = num1 / num2
    puts "#{num1} divided by #{num2} is #{total}"
  when 'r'
    puts 'Square Root'
    print "Number: "
    num1 = gets.to_f
    total = Math.sqrt(num1)
    puts "The square root of #{num1} is #{total}"
  when 'e'
    puts 'Exponents'
    print "First number: "
    num1 = gets.to_f
    print "Second number: "
    num2 = gets.to_f
    total = num1 ** num2
    puts "#{num1} to the power of #{num2} is #{total}"
  else
    puts "Invalid selection"
  end
  show_menu
  menu_choice = gets[0].downcase
end

puts "Thanks for using this calculator"
