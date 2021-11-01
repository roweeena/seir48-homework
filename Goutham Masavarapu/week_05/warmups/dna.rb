# ## Point Mutations
# A mutation is simply a mistake that occurs during the creation or copying of a
# nucleic acid, in particular DNA. Because nucleic acids are vital to cellular
# functions, mutations tend to cause a ripple effect throughout the cell.
# Although mutations are technically mistakes, a very rare mutation may equip
 # the cell with a beneficial attribute. In fact, the macro effects of evolution
 # are attributable by the accumulated result of beneficial microscopic mutations over many generations.
# The simplest and most common type of nucleic acid mutation is a point mutation,
# which replaces one base with another at a single nucleotide.
# By counting the number of differences between two homologous DNA strands taken
# from different genomes with a common ancestor, we get a measure of the minimum
# number of point mutations that could have occurred on the evolutionary path between the two strands.
# This is called the 'Hamming distance'
# ```
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# ```
# The Hamming distance between these two DNA strands is 7.
# Write a program that can calculate the Hamming difference between two DNA strands.


# Write a program that can calculate the Hamming difference between two DNA strands.
require('pry')

# Starting strings
str1 = "GAGCCTACTAACGGGAT"
str2 = "CATCGTAATGACGGCCT"

def ham_count( first_string, second_string )

  # Immediately split our strings into arrays we can compare.
  first_string = first_string.split('')
  second_string = second_string.split('')
  difference = 0


  # each_with_index is just an each loop which gives us access to an index value.
  # I want this so I can directly compare the arrays I'm looping through.
  first_string.each_with_index do | letter, i |

    # If this index in either array isn't exactly the same, add to our counter
    difference += 1 if first_string[i] != second_string[i]
  end


  # Lastly -- use our impolicit return.
  difference

end

p ham_count(str1, str2)


# ---------------------------------------------------------
#  Class approach
# ---------------------------------------------------------

class HamCount

  # Initialize runs when we create this class, this is where we tell our class:
  # What number of arguments to expect.
  # Any methods or data changes we want to run immediately.

  # In this case, I expect 2 arguments, and I immediately make them into instance variables, and split them.
  def initialize( str1, str2 )
    @str1 = str1.split('')
    @str2 = str2.split('')
  end

  # This method does not need to take arguments, I have the instance variables from initialize.
  def difference_count
    difference = 0
    @str1.each_with_index do | letter, i |
      difference += 1 if @str1[i] != @str2[i]
    end
    difference
  end
end

# Classes are initialized by calling .new, which immediately triggers the initialize.
hammed_class = HamCount.new( str1, str2 )

# Saving the class in a variable gives me access to all of the methods within the class.
p hammed_class.difference_count
