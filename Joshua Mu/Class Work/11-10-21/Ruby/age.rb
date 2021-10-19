print "How old are you? "
age = gets.chomp

if age.to_i < 18
    print "You are illegal"
else
    print "You are legal"
end