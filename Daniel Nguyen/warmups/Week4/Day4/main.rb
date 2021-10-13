require "pry"

# Returns a hash with a count of each nucleotide in a given DNA strand
def count_nucleotides dna
  nucleotides = {}
  dna.each_char { |n| nucleotides[n] = dna.count n }
  nucleotides
end

# Generates a random 46-chromosome dna strand
def generate_dna
  nucleotides = [ 'A', 'C', 'G', 'T' ]
  (0..45).map { nucleotides.sample }.join()
end

binding.pry
# To test:
# count_nucleotides generate_dna
