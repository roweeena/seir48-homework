require 'pry'
# Warmup - Raindrops

# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:




#
# print ""



def pling_plang_plong(magic_number)
    magicResult = ''
    # If the number contains 3 as a factor, output 'Pling'.
    if magic_number % 3 == 0
        magicResult += 'Pling '
        puts magicResult
    end
    # If the number contains 5 as a factor, output 'Plang'.
    if magic_number % 5 == 0
        magicResult.to_s += 'Plang'
        puts magicResult
    end
    # If the number contains 7 as a factor, output 'Plong'.
    if magic_number % 7 == 0
            magicResult += 'Plong'
    end
    # If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
    if magicResult == ''
            magicResult = number.to_s
    end
end

def menu
    puts "raindrop" * 25
    puts "Pling Plang Plong".center(50)
    puts

print "enter to start and q to quit"
end 

menu

choice = gets[0].downcase

until choice = 'q'
    print "enter a number"
    num = gets.to_i
    pling_plang_plong(magic_number)
end

puts 'Thanks for playing.'

# Examples

# 28 has 7 as a factor. In raindrop-speak, this would be a simple "Plong".
pling_plang_plong(28)
# 1755 has 3 and 5 as factors. In raindrop-speak, this would be a "PlingPlang".
pling_plang_plong(1755)
# 34 has neither 3, 5 nor 7 as a factor. Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
pling_plang_plong(34)
binding.pry