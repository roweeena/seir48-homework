print "What temperature is it currently? "
temperature = gets.chomp;
print "What is the desired temp? "
desiredTemp = gets.chomp;
print "Is the air conditioner functional? Y/N "
airConCon = gets.chomp;

if temperature.to_i > desiredTemp.to_i 
    puts "Turn on the A/C Please" if airConCon
elsif temperature.to_i < desired.to_i
    puts "Fix the A/C whenever you have the chance... It's cool..." if !airConCon
else
    "Fix the A/C now! It's hot!"
end
