# ## Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.
# - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# ### Examples
# - 28 has 7 as a factor.
#  * In raindrop-speak, this would be a simple "Plong".
# - 1755 has 3 and 5 as factors.
#  * In raindrop-speak, this would be a "PlingPlang".
# - 34 has neither 3, 5 nor 7 as a factor.
#  * Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
# New file setup today. You will need to create a ```raindrops.rb``` file that can be executable in your terminal.

def raindrops(number)

  result = ''

  # - If the number contains 3 as a factor, output 'Pling'.
  result += 'Pling ' if number % 3 == 0

  # - If the number contains 5 as a factor, output 'Plang'.
  result += 'Plang ' if number % 5 == 0

  # - If the number contains 7 as a factor, output 'Plong'.
  result += 'Plong ' if number % 7 == 0

  # - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
  result = number.to_s if result == ''

  puts result

end


def menu
  puts "💧" * 25
  puts "welcome to raindrops".center(200)
  puts "💧" * 25
  print "[enter] to start and [q] to quit"
end

menu

choice = gets[0].downcase

until choice == 'q'
  print "enter a number"
  num = gets.to_i
  raindrops(num)
end

puts "thanks for playing"

# raindrops(1)
# raindrops(6)
# raindrops(15)
# raindrops(20)
# raindrops(105)
