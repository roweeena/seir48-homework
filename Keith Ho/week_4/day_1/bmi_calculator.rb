
def show_menu
  puts "BMI Calculator"
  puts "=-" * 40
  puts "[Start to calculate] (Y/N)"
  puts "[q] - Quit"
end

show_menu
menu_choice = gets[0].chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'y'
    print "Enter your weight in KG:"
    weight = gets.chomp.to_f
    print "Enter your height in meters:"
    height = gets.chomp.to_f
    result = (weight / (height ** 2))
    puts "Your BMI is $#{result}."
  else
    puts "If you don't wanna calculate, pelase press q to quit."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator."
