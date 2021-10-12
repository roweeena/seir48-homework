def show_menu
    puts "Calculator" # .center to make this nice lookin
    puts "<>" * 20  #
    puts "[A]ddition"
    puts "[S]ubtract"
    puts "[M]ultiply"
    puts "[D]ivide"
    puts "[E]xponents"
    puts "Square [R]oot"
    puts "[Q]uit"
    puts ""
    print "Enter your choice: "  
end

def add
    puts "Enter 1st number to add: " 
    num1 = gets.to_f
    puts "Add what to #{num1}?: " 
    num2 = gets.to_f   
    puts "The sum of the two numbers is #{result = num1 + num2}"
    puts ""
    puts "Returning to main..."
end

def subtract
    puts "Enter 1st number: " 
    num1 = gets.to_f
    puts "Subtract what from #{num1}?: " 
    num2 = gets.to_f   
    puts "#{num2} subtracted from #{num1} is #{result = num1 - num2}"
    puts ""
    puts "Returning to main..."
end

def multiply
    puts "Enter a number: " 
    num1 = gets.to_f
    puts "Multiply #{num1} by what?: " 
    num2 = gets.to_f   
    puts "#{num1} multiplied by #{num2} is #{result = num1 * num2}"
    puts ""
    puts "Returning to main..."
end

def divide
    puts "Enter a number: " 
    num1 = gets.to_f
    puts "Divide #{num1} by what?: " 
    num2 = gets.to_f   
    puts "#{num1} divided by #{num2} is #{result = num1 / num2}"
    puts ""
    puts "Returning to main..."
end

def exponents
    puts "Enter a number: " 
    num1 = gets.to_f
    puts "#{num1} to the power of what?: " 
    num2 = gets.to_f   
    puts "#{num1} to the power of #{num2} is #{result = num1**num2}"
    puts ""
    puts "Returning to main..."
end

def squareroot
    puts "Enter a number: " 
    num1 = gets.to_f
    puts "The square root of #{num1} is #{result = Math.sqrt(num1)}"
    puts ""
    puts "Returning to main..."
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts ""
        add
    when 's'
        puts "You chose subtraction!"
        puts ""
        subtract
    when 'm'
        puts "You chose multiply!"
        puts ""
        multiply
    when 'd'
        puts "You chose divide!"
        puts ""
        divide    
    when 'e'
        puts "You chose exponents!"
        puts ""
        exponents         
    when 'r'
        puts "You chose square root!"
        puts ""
        squareroot

    else
        puts "Invalid choice!"
        puts ""
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using Sarah$oft calculator"