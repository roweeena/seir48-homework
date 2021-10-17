def show_menu
    puts "Simple Calculator Machine" #check out the centre method here
    puts "*--" * 15
    puts "[a] Addition"
    puts "[s] Subtraction"
    puts "[d] Division"
    puts "[m] Multiplication"
    puts "[x] Exponent"
    puts "[sr] Square Root"
    puts "[r] Remainder"
    puts  "[q] Quit"
    puts "*--" * 15
    prompt
end

def prompt
    print "Enter your choice: "
end

def addition
    puts "Enter a number: "
    num1 = gets.chomp().to_f
    puts "Enter another number: "
    num2 = gets.chomp().to_f
    num1 + num2
end

def numbers # alternantive approach
    puts "Enter a number: "
    num1 = gets.chomp().to_f
    puts "Enter another number: "
    num2 = gets.chomp().to_f
    [num1, num2] # new array
end

def division
    puts "Enter a number: "
    num1 = gets.chomp().to_f
    puts "Enter another number: "
    num2 = gets.chomp().to_f
    num1 / num2
end

def multiplication
    puts "Enter a number: "
    num1 = gets.chomp().to_f
    puts "Enter another number: "
    num2 = gets.chomp().to_f
    num1 * num2
end

def exponent
    puts "Enter a number: "
    num1 = gets.chomp().to_f
    puts "Enter another number: "
    num2 = gets.chomp().to_f
    num1 ** num2
end

def rquare_root
    puts "Enter a number: "
    num1 = gets.chomp().to_f
    puts Integer.sqrt(num1)
end

def remainder
    puts "Enter a number: "
    num1 = gets.chomp().to_f
    puts "Enter another number: "
    num2 = gets.chomp().to_f
    num1 % num2
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts addition
    when 's'
        puts "You chose subtraction!" 
        res = numbers # array approach - numbers into the result varaible
        puts res[0] - res[1] # subtracts the result at index1 - result at index0 
    when 'd'
        puts "You chose division!"
        puts division
    when 'm'
        puts "You chose multiplication!"
        puts multiplication
    when 'x'
        puts "You chose to calcluate the exponent!"
        puts exponent
    when 'sr'
        puts "You chose square root!"
        puts rquare_root
    when 'r'
        puts "You chose remainder!"
        puts remainder
    else
        puts "You have not selected a valid option from the menu."
    end
#   puts "doing some work for you..."
#   system("clear") nice to clear screen but more functionality needed here to keep last calculation onScreen
    
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for calculating!"