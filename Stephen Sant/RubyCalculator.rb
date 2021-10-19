def show_menu
    puts "=-" * 40
    puts "Calculator"
    puts "=-" * 40
    puts "[a] - Addition"
    puts "[s] - Subtract"
    puts "[m] - Multiply"
    puts "[d] - divide"
    puts "[q] - Quit"
    print "Enter your choice: "
end

def addition
    print "First number: "
    a = gets.to_f
    print "Second number: "
    b = gets.to_f
    puts "#{a} + #{b} = #{a+b}"
    print "Press the any-key to continue: "
    gets
end

def subtract
    print "First number: "
    c = gets.to_f
    print "Second number: "
    d = gets.to_f
    puts "#{c} - #{d} = #{c-d}"
    print "Press the any-key to continue: "
    gets
end

def multiply
    print "First number: "
    e = gets.to_f
    print "Second number: "
    f = gets.to_f
    puts "#{e} * #{f} = #{e*f}"
    print "Press the any-key to continue: "
    gets
end

def divide
    print "First number: "
    g = gets.to_f
    print "Second number: "
    h = gets.to_f
    puts "#{g} / #{h} = #{g/h}"
    print "Press the any-key to continue: "
    gets
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "Ready to add!"
        addition
    when 's'
        puts "Ready to subtract!"
        subtract
    when 'm'
        puts "Ready to multiply!"
        multiply
    when 'd'
        puts "Ready to divide!"
        divide
    else
        puts "Unknown selection."
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator."