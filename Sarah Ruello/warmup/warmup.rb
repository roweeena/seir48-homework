###########################################################################
############################## Warmup 12/10 ###############################
# # Is this a triangle? 
# ### Task:
# Implement a function that accepts 3 integer values a, b, c. The function should return 
# true if a triangle can be built with the sides of given length and false in any other case.

# ### Examples
#   is_triangle(1,2,2) #true
#   is_triangle(5,1,2) #false
#   is_triangle(4,2,3) #true

# ## Bonus
# Make it pretty and create a menu that will allow for user input

# def is_triangle(a, b, c)

#     max = [a, b, c].max #find max value in array
#     sum = a + b + c
#     puts sum - max > max

      # OR:
#     # puts "Enter side A: "
#     # a = gets.to_i
#     # puts "Enter side B: "
#     # b = gets.to_i
#     # puts "Enter side C: "
#     # c = gets.to_i
#     # if a + b > c && a + c > b && b + c > a
#     #     puts "You have a triangle!"
#     # else
#     #     puts "This is not a triangle..."
#     # end
# end 

#   is_triangle(1,2,2) #true
#   is_triangle(5,1,2) #false
#   is_triangle(4,2,3) #true
    
###########################################################################
############################## Warmup 13/10 ###############################

# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) 
# and output the following:
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# Examples
# 28 has 7 as a factor. In raindrop-speak, this would be a simple "Plong".
# 1755 has 3 and 5 as factors. In raindrop-speak, this would be a "PlingPlang".
# 34 has neither 3, 5 nor 7 as a factor. Raindrop-speak doesn't know what to make of 
# that, so it just goes with the straightforward "34".


# def raindrops(num)
#   string = ""
#   if num % 3 == 0
#    string += "Pling"
#   end
#   if
#     num % 5 == 0
#     string += "Plang"
#   end
#   if    
#     num % 7 == 0
#     string += 'Plong'
#   end
#   if string.length != 0
#     puts string 
#   else 
#     puts num.to_s 
#   end
# end 

# raindrops(28)
# raindrops(1755)
# raindrops(34)
  
###########################################################################
############################## Warmup 14/10 ###############################

# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

# Each symbol represents a nucleotide, which is a fancy name for the particular molecules
# that happen to make up a large part of DNA.

# Write a program in ruby that will tell you how many times each nucleotide occurs in a 
# string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).

# It should also tell you if a character in the string is not a valid nucleotide (i.e. 
# NOT 'A', 'C', 'G', and 'T').

# Example:

# ```
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# ```

# def count_nucleotides(string)

#   nucleotides = {
#   'A' => 0,

#   'error' => 0
# }

# string.each_char do |char|
#   if nucleotides.keys.include? char 
#     nucleotides[char] += 1
#   else 
#   nucleotides['error'] += 1
# end     

# puts nucleotides
# nucleotides.map {|k, v| puts "#{k}: #{v}"

#   # puts "A: #{string.count('A')}"
#   # puts "C: #{string.count('C')}"
#   # puts "G: #{string.count('G')}"
#   # puts "T: #{string.count('T')}"
  
# end  




# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

###########################################################################
############################## Warmup 15/10 ###############################
# # Scrabble Score

# Write a RUBY program that, given a word, computes the scrabble score for that word.

# ```ruby
# scrabble('cabbage');
# // => 14
# scrabble('cabbage'); // with b doubled, g tripled and a double word
# // => 48
# ```

# ## Letter Values

# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# ```

# ## Extensions

# - You can play a `:double` or a `:triple` letter.
# - You can play a `:double` or a `:triple` word.


#   def scrabble(string)
#       points = {
#   	"a" => 1,
#   	"e" => 1,
#   	"i" => 1,
#   	"o" => 1,
#   	"u" => 1,
#   	"l" => 1,
#   	"n" => 1,
#   	"r" => 1,
#   	"s" => 1,
#   	"t" => 1,
#   	"d" => 2,
#   	"g" => 2,
#   	"b" => 3,
#   	"c" => 3,
#   	"m" => 3,
#   	"p" => 3,
#   	"f" => 4,
#   	"h" => 4,
#   	"v" => 4,
#   	"w" => 4,
#   	"y" => 4,
#   	"k" => 5,
#   	"j" => 8,
#   	"x" => 8,
#   	"q" => 10,
#   	"z" => 10,
#   }

#   score = 0

#   points[double] *= 2 unless double == ''

#   string.each_char do |i|
#       score += points[i]
#     end

#   puts "Your score is: #{score}"

#   end
  
#   scrabble('cabbage');
#   scrabble('expulsion');

###########################################################################
############################## Warmup 18/10 ###############################

#   # Robot Factory 🤖
# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.
# The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.
# Names typically take the format of things like "BX777" or "SD234".
# For instance:
# ```rb
# robot1 = Robot.new
# puts robot1.name
# => "BX777"
# robot2 = Robot.new
# puts robot2.name
# => "SD234"
# puts robot2.name
# => "SD234"
# ```
# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.
# if I say:
# ```rb
# robot3 = Robot.new
# puts robot3.name
# => "RF629"
# robot3.reset
# puts robot3.name
# => "ZC532"
# ```
# ## Extensions 🧯
# ### Counters 🔢
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away.
# For every action our robot takes, we should keep track of it.
# ```rb
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count
# => 5
# ```
# ### Robot Time ⌚️
# Number of instructions is important, but so is the total age of the robot.
# ```rb
# robot3 = Robot.new
# puts robot3.timers
# => "21 seconds since last boot, 21 seconds since creation"
# robot3.reset
# puts robot3.timers
# => "8 seconds since last boot, 29 seconds since creation"
# ``

# require 'pry'

# class Robot 
# 	attr_reader :instruction_count

#     def initialize 
# 		@name = generate_name
# 		@instruction_count = 0
# 		@created_at = Time.now
# 		@reset_at = Time.now
#     end 

# 	def generate_name 
# 		digits = ("000".."999").to_a.sample
# 		letters = ('AA'..'ZZ').to_a.sample
# 		letters + digits
# 	end	

# 	def name	
# 		@instruction_count += 1
# 		puts "My name is #{@name}"
# 	end	

# 	def reset 
# 		@instruction_count += 1
# 		@name = generate_name
# 		@reset_at = Time.now	
# 	end

# 	def timers 
# 		time_since_reset = Time.now - @reset_at
# 		time_since_creation = Time.now - @created_at

# 		message = "#{time_since_reset.round(2)} seconds since last boot, 
# 		#{time_since_creation.round(2)} since creation."
# 	end

# end

# binding.pry


###########################################################################
############################## Warmup 19/10 ###############################

# # Roman Numerals

# The Romans were a clever bunch. They conquered most of Europe and ruled it 
# for hundreds of years. They invented concrete and straight roads and even bikinis.
# One thing they never discovered though was the number zero. This made writing 
# and dating extensive histories of their exploits slightly more challenging, 
# but the system of numbers they came up with is still in use today. For example, 
# the BBC uses Roman numerals to date their programmes.

# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these 
# letters have lots of straight lines and are hence easy to hack into stone 
# tablets using a chisel).

# ```plain
#  1  => I
# 10  => X
#  7  => VII
# ```

# Write a program that will convert Arabic numerals to Roman numerals.

# There is no need to be able to convert numbers larger than about 3000. (The Romans 
# themselves didn't tend to go any higher)

# Wikipedia says: "Modern Roman numerals ... are written by expressing each digit 
# separately starting with the left most digit and skipping any digit with a value 
# of zero."

# To see this in practice, consider the example of 1990.

# ```
# In Roman numerals 1990 is MCMXC:

# 1000=M 900=CM 90=XC

# 2008 is written as MMVIII:

# 2000=MM 8=VIII
# ```

# See [this website](https://www.rapidtables.com/math/symbols/roman_numerals.html) 
# for the table of Roman Numbers you will need to check for.


# Do this in Ruby.

# def romanise(num)

# roman = {
# 	1000 => 'M',
# 	900 => 'CM',
# 	500 => 'D',
# 	400 => 'CD',
# 	100 => 'C',
# 	90 => 'XC',
# 	50 => 'L',
# 	40 => 'XL',
# 	10 => 'X',
# 	9 => 'IX',
# 	5 => 'V',
# 	4 => 'IV',
# 	1 => 'I'
# }
# 	string = ""
# 	roman.each do |value, letter| 
#     	string << letter*(num / value) # '123' x (123 / 100 x 1, 23 / 10 x 2, III x 3)
# 		num = num % value  	
# 	end
# 	return string
	
# end 

# puts romanise(123) # CXXIII
# puts romanise(1876)
# puts romanise(325)

###########################################################################
############################## Warmup 20/10 ###############################

# Luhn Formula

# Write a program that can take a number and determine whether or not it is 
# valid per the Luhn formula.

# This number must pass the following test:

# Counting from rightmost digit (which is the check digit) and moving left, 
# double the value of every second digit. For any digits that thus become 10 or 
# more, subtract 9 from the result.

# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 
# 	and 2×8=16 → 16-9=7).

# Add all these digits together. For example, if 1111 becomes 2121, then 
# 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.

# If the total ends in 0 (put another way, if the total modulus 10 is 0), 
# then the number is valid according to the Luhn formula; otherwise it is 
# not valid. So, 1111 is not valid (as shown above, it comes out to 6), 
# while 8763 is valid (as shown above, it comes out to 20).

# Write a program that, given a number, can check if it is valid per the Luhn formula.

# ```ruby
# luhn 3554
# # => false

# luhn 8763
# # => true
# ```

def luhn(num)	
	sum = 0
	nums = num.to_s.split("")
	# each_with_index iterates through each element in an array or hash, 
	# and extracts the element, as well as the index:
	nums.each_with_index do |n, i|
		sum += if (i.even?)
			n.to_i * 2 > 9 ? n.to_i * 2 - 9 : n.to_i * 2
		else
			n.to_i
		end
	end	
	if sum % 10 == 0
		puts "true"
	else
		puts "false"
	end
end
						

luhn(3554)
luhn(8763)
