puts "Mortgage Calculator"
puts "<>"*15
print "How much do you owe? : "
owe = gets.to_f
print "How many years is the mortgage for? : "
years = gets.to_f
print "How frequent are your payments? (yearly, monthly, fortnightly, weekly): "
payment_frequency = gets[0].downcase
case payment_frequency
when 'y'
  payments = owe/years
  puts "Your payments will be $#{payments} every year"
when 'm'
  payments = owe/(years*12)
  puts "Your payments will be $#{payments} every month"
when 'f'
  payments = owe/(years*26)
  puts "Your payments will be $#{payments} every fortnight"
when 'w'
  payments = owe/(years*52)
  puts "Your payments will be $#{payments} every week"
else
  puts "You entered an invalid selection"
end
