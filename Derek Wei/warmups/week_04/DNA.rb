# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).
#
# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').
#
# Example:
#
# ```
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# ```

def count_nucleotides dna

  if dna.every? { |c| print if c != ('A' || 'C' || 'G' || 'T') }
    puts "Invalid character detected"
  else
    puts "A: #{dna.count('A')}"
    puts "C: #{dna.count('C')}"
    puts "G: #{dna.count('G')}"
    puts "T: #{dna.count('T')}"
  end

end

count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGCU"

# def count_nucleotides string
#
#   nucleotide = {
#     'A' => 0,
#     'C' => 0,
#     'G' => 0,
#     'T' => 0,
#     'error' => 0
#   }
#
#   string.each_char do |char|
#     if nucleotides.keys.include? char
#       nucleotides[char] += 1
#     else
#       nucleotides['error'] += 1
#     end
#   end
#
#   puts nucleotides
#   nucleotides.map{|k,v| puts "#{k}: #{v}"}
#
# end
