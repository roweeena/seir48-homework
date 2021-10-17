require "pry"

def raindrops (number)
  output = ''
  if number != 0
    output += 'Pling' if number % 3 == 0
    output += 'Plang' if number % 5 == 0
    output += 'Plong' if number % 7 == 0
  end
  output = number.to_s if output == ''

  output
end

(0..105).each do |n|
  p n
  p raindrops n
end

# binding.pry

def menu
  puts "💧" * 40
  puts "Raindrops".center(40)
  puts "💧" * 40
  print "[enter] to start and [q] to quit "
end

menu
choice = gets[0].downcase

until choice == 'q'
  print "Enter a number:"
  n = gets.to_i
  p raindrops n
end
