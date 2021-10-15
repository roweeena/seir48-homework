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

def count_nucleotides(string)

  nucleotides = {
  'A' => 0,

  'error' => 0
}

string.each_char do |char|
  if nucleotides.keys.include? char 
    nucleotides[char] += 1
  else 
  nucleotides['error'] += 1
end     

puts nucleotides
nucleotides.map {|k, v| puts "#{k}: #{v}"

  # puts "A: #{string.count('A')}"
  # puts "C: #{string.count('C')}"
  # puts "G: #{string.count('G')}"
  # puts "T: #{string.count('T')}"
  
end  




count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"