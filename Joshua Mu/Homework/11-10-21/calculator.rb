
def show_menu
    puts "Calculator" # TODO: Check out .center to make this look nicer
    puts "^-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    # TODO: Add the other operations here (multiply, divide, subtract)
    puts "[q] - Quit"
    print "Enter your choice: "
  end
  
  show_menu
  menu_choice = gets.chomp.downcase
  
  until menu_choice == 'q'
    case menu_choice
    when 'a'
      puts "You chose addition!"
      firstNumber = gets.chomp
      secondNumber = gets.chomp
      puts "The sum of #{firstNumber} & #{secondNumber} is #{firstNumber.to_i + secondNumber.to_i}"
    when "s"
        puts "You chose subtraction!"
        firstNumber = gets.chomp
        secondNumber = gets.chomp
        puts "The subtraction of #{firstNumber} from #{secondNumber} is #{firstNumber.to_i - secondNumber.to_i}"
    when "m"
        puts "You chose multiplication!"
        firstNumber = gets.chomp
        secondNumber = gets.chomp
        puts "The multiple of #{firstNumber} by #{secondNumber} is #{firstNumber.to_i * secondNumber.to_i}"
    when "d"
        puts "You chose division!"
        firstNumber = gets.chomp
        secondNumber = gets.chomp
        puts "The division of #{firstNumber} by #{secondNumber} is #{firstNumber.to_i / secondNumber.to_i}"
    else
      puts "Invalid selection. You idiot."
    end
  
    show_menu
    menu_choice = gets.chomp.downcase
  end
  
  puts "Thanks for using this crappy calculator."