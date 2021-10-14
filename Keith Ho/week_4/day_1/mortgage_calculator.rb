
def show_menu
  puts "Mortgage Calculator"
  puts "=-" * 40
  puts "[Start to calculate] (Y/N)"
  puts "[q] - Quit"
end

show_menu
menu_choice = gets[0].chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'y'
    print "Enter the loan amount you wanna borrow:"
    amount = gets.chomp.to_f
    print "Enter the annual percentage interest rate:"
    rate = gets.chomp.to_f
    print "How many years you wanna borrow?"
    years = gets.chomp.to_i
    months = years * 12
    interest = (amount * (rate * 0.01)) / months
    result = ((amount / months) + interest)
    puts "Your monthly repayment is $#{result}."
  else
    puts "If you don't wanna calculate, pelase press q to quit."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator."
