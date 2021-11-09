# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.
# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.
# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
# This is called the 'Hamming distance'
# ```
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# ```
# The Hamming distance between these two DNA strands is 7.
# Write a program that can calculate the Hamming difference between two DNA strands.

#WORKS WITH STRING!!  V1 , v2
def humming_distance str1, str2
  result = 0

  # str1.split('').each_index do |i|  #NORMAL !!
  # result += 1 if str1[i] != str2[i]
  str1.chars.map.with_index do |k,v|  #MAPS !!
   result += 1 if str1[k] != str2[v]
    end
  puts result
end
 humming_distance 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'


# #v3
#
# def humming_distance str1, str2
#
#   [str1.length, str2.length].min.times.count {|i| str1[i] != str2[i]}
# end
# puts humming_distance 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'


# #works with numbers!!!! Integers !!!!

# def hamm_dist(a, b)
#   dist = 0
#   val= a ^ b
#
#   while not val.zero?
#     dist += 1
#     val &= val - 1
#   end
#   dist
# end
#
# p hamm_dist(4545434231, 123123123213)
