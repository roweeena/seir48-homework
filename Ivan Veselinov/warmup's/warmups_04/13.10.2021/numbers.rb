require 'pry'


# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

puts "PLING && PLANG && PLONG"
puts "this is factoriel exercise "
puts "<>" *20
puts "Please enter your number"

a= gets.chomp.to_i
puts "=-" * 20
  if a % 3 == 0
    puts "Pling"
  elsif a % 5 == 0
      puts "Plong"
    elsif a % 7 == 0
        puts "Plang"
      else
        puts " Wrong number -> #{a}"
    end




# # v2
# def raindrops(a)
#   result =''
#   puts a
#   if a % 3 == 0
#     result += "Pling"
#   end
#   if a % 5 == 0
#       result += "Pling"
#     end
#     if a % 7 == 0
#         result += "Pling"
#       end
#
#       if  result == ''
#         result = a.to_s
#       end
#       puts result
#     end
# raindrops(1)
# raindrops(6)
# raindrops(15)
# raindrops(20)
# raindrops(105)

# v3
# def raindrops
#   result =''
#
#   result += 'Pling' if a % 3 == 0
#
#   result += 'Pling' if a % 5 == 0
#
#   result += 'Pling' if a % 7 == 0
#
#   result = a.to_s  if  result == ''
#
#   puts result
#     end
#
#
# def menu
#   puts "💧" *25
#   puts "welcome to raindrops".center(50)
#   puts "💧" *25
#   puts "[enter] to start and [q] to quit"
# end
#
# menu
# choice = gets[0].downcase
# until choice == 'q'
#   print "enter a number"
#   a = gets.chomp.to_i
#   raindrops(result)
# end
#
# puts "thank for running"
#

# binding.pry
