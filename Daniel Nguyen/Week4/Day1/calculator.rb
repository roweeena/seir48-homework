# Displays the options
def show_menu
  puts "\n[+] - Add"
  puts "[*] - Multiply"
  puts "[-] - Subtract"
  puts "[/] - Divide"
  puts "[**] - Exponentiate"
  puts "[sqrt] - Square Root"
  puts "[m] - Show menu"
  puts "[q] - Quit"
end

# Requests a menu choice
def prompt
  print "Enter your choice: "
  gets.chomp.downcase
end

# Initial prompt
puts "Calculator"
puts "[m] - Show menu"
menu_choice = prompt


### Operator methods

def add
  puts "Enter two numbers to add:"
  a = gets.to_i
  b = gets.to_i
  puts "#{ a } + #{ b } = #{ a + b }"
end

def subtract
  puts "Enter two numbers to subtract:"
  a = gets.to_i
  b = gets.to_i
  puts "#{ a } - #{ b } = #{ a - b }"
end

def multiply
  puts "Enter two numbers to multiply:"
  a = gets.to_i
  b = gets.to_i
  puts "#{ a } * #{ b } = #{ a * b }"
end

def divide
  puts "Enter two numbers to divide:"
  a = gets.to_f
  b = gets.to_f
  puts "#{ a } / #{ b } = #{ a / b }"
end

def exponentiate
  print "Enter a number: "
  n = gets.to_i
  print "Enter a power: "
  p = gets.to_i
  puts "#{ n }^#{ p } = #{ n ** p }"
end

def square_root
  print "Enter a number: "
  n = gets.to_i
  puts "sqrt(#{ n }) = #{ Math.sqrt(n) }"
end

# Program loop
until menu_choice == 'q'
  case menu_choice
  when '+'
    puts add
  when '-'
    puts subtract
  when '*'
    puts multiply
  when '/'
    puts divide
  when '**'
    puts exponentiate
  when 'sqrt'
    puts square_root
  else
    show_menu
  end

  menu_choice = prompt
end

puts "Thanks for using this crappy calculator."
