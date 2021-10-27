# Generates a random 46-chromosome dna strand
def generate_dna
  nucleotides = [ 'A', 'C', 'G', 'T' ]
  (0..45).map { nucleotides.sample }.join()
end

def calculate_hanmming_distance(strand_a, strand_b)
  point_mutations = ''

  strand_a.each_char.with_index do |n, i|
    if n != strand_b[i]
      point_mutations << '^'
    else
      point_mutations << ' '
    end
  end

  p strand_a
  p strand_b
  p point_mutations

  point_mutations.count '^'
end

require "pry"
binding.pry

# TO TEST:
calculate_hanmming_distance(generate_dna, generate_dna)
