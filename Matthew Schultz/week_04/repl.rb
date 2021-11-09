puts "Welcome to Ruby REPL"
puts "XX"*10
print "+=+> "
input = gets

until input.chomp == 'q'
  puts eval(input)
  puts "Press 'q' to quit"
  print "+=+> "
  input = gets
end

puts "Thanks for using REPL"
