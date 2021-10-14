
def show_menu
  puts "Trip Calculator"
  puts "=-" * 40
  puts "[Start to calculate] (Y/N)"
  puts "[q] - Quit"
end

show_menu
menu_choice = gets[0].chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'y'
    print "Enter the distance to your destination(miles):"
    distance = gets.chomp.to_f
    print "Enter the efficiency of pestrol(miles/gallon):"
    miles_gallon = gets.chomp.to_f
    print "Enter the unit price of pestrol(per gallon):"
    price_gallon = gets.chomp.to_f
    print "Enter your speed(miles/hour):"
    speed = gets.chomp.to_f
    time = distance / speed
    cost = (distance / miles_gallon) * price_gallon
    puts "Your will take #{time} hours to arrive your destination and the cost would be $#{cost}."
  else
    puts "If you don't wanna calculate, pelase press q to quit."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator."
