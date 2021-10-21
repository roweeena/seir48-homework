count_nucleotides = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
def sequence_dna (nucleotides)
a_count = 0
c_count = 0
g_count = 0
t_count = 0
unknown_count = 0
nucleotides_array = nucleotides.split("")
i = 0
until i == nucleotides_array.length()
case nucleotides_array[i]
when "A"
    a_count = a_count+1
when "C"
    c_count = c_count+1
when "G"
    g_count = g_count+1
when "T"
    t_count = t_count+1
else
    unknown_count = unknown_count+1
end
i = i+1
end
puts "A: #{a_count}"
puts "C: #{c_count}"
puts "G: #{g_count}"
puts "T: #{t_count}"
if unknown_count != 0
    puts "Unknown nucleotides: #{unknown_count}"
end
end
sequence_dna(count_nucleotides)