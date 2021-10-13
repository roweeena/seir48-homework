def show_menu
  puts "<o>" * 28
  puts "Calculator".center(85)
  puts "<o>" * 28
  puts "[a] - Addition"
  puts "[s] - Substraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[x] - Exponents"
  puts "[r] - Square root"
  puts "[e] - Exit"
  puts "<o>" * 28
  print "Enter your choice: "
end

show_menu

menu_choice = gets.chomp.downcase


until menu_choice == 'e'

case menu_choice

      when 'a'
        puts "You chose addition!"
        print "First number: "
          first_num= gets.chomp.to_i
        print "Second number: "
          second_num= gets.chomp.to_i
          sum= first_num + second_num
        puts "Addition of #{first_num} and #{second_num} is #{sum}"

      when 's'
      puts "You chose substraction!"
      print "First number: "
        first_num= gets.chomp.to_i
      print "Second number: "
        second_num= gets.chomp.to_i

      if first_num > second_num
          sub= first_num - second_num
        puts "Substraction of #{first_num} and #{second_num} is #{sub}"
      else
          sub=  second_num - first_num
          puts "Substraction of #{first_num} and #{second_num} is #{sub}"
      end

      when 'm'
        puts "You chose multiplication!"
        print "First number: "
          first_num= gets.chomp.to_i
        print "Second number: "
          second_num= gets.chomp.to_i
          multiplication= first_num * second_num
        puts "Multiplication of #{first_num} and #{second_num} is #{multiplication}"

      when 'd'
        puts "You chose division!"
        print "First number: "
          first_num= gets.chomp.to_i
        print "Second number: "
          second_num= gets.chomp.to_i
          division= first_num / second_num
        answer= division.to_f
        puts "Division of #{first_num} and #{second_num} is #{answer}"

      when 'x'
        puts "You chose Exponents!"
        print "Number: "
          number= gets.chomp.to_i
        print "Power: "
          power= gets.chomp.to_i
          exponent= number ** power
        puts "#{number} to the power #{power} is #{exponent}"

      when 'r'
        puts "You chose Exponents!"
        print "Number: "
          number= gets.chomp.to_i
          squareroot= Math.sqrt(number)
        puts "Square root of #{number} is #{squareroot}"

      else
          puts "Invalid selection. Please check menu again."
      end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using calculator! Have a good day."
