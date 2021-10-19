
def show_menu
    puts "                                  Calculator" # TODO: Check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Substraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponents"
    puts "[r] - Square root"
    # TODO: Add the other operations here (multiply, divide, subtract)
    puts "[q] - Quit"
    print "Enter your choice: "
  end
  
  show_menu
  menu_choice = gets.chomp.downcase
  def do_stuff
    print "first number: "
      first_num = gets.chomp.to_i.to_f
      print "second number: "
      second_num = gets.chomp.to_i.to_f
      [first_num, second_num]
  end
  
  until menu_choice == 'q'
    case menu_choice
    when 'a'
      puts "You chose addition!"
        result = do_stuff
      puts "The result is #{result[0] + result[1]}" # TODO: actually do the addition
    # add additonal `when` clauses for the other menu options
    when 's'
        puts "your choice is subtraction"
        result = do_stuff
        puts "The result is #{result[0] - result[1]}"
    when 'm'
        puts "your choice is multiplication"
        result = do_stuff
        puts "The result is #{result[0] * result[1]}"
    when 'd'
        puts "your choice is division"
        result = do_stuff
        puts "The result is #{result[0] / result[1]}"
    when 'e'
        puts "your choice is exponents"
        result = do_stuff
        puts "The result is #{result[0] ** result[1]}"
    when 'r'
        puts "your choice is Square root"
        print "give me a number: "
        num = gets.chomp.to_i.to_f
        puts "The Square root of #{num} is #{Math.sqrt(num)}."
    else
      puts "Invalid selection. You idiot."
    end
  
    show_menu
    menu_choice = gets.chomp.downcase
  end
  
  puts "Thanks for using this crappy calculator."