def dna str
  a = str.count("A")
  c = str.count("C")
  g = str.count("G")
  t = str.count("T")

  puts "A: #{a}"
  puts "C: #{c}"
  puts "G: #{g}"
  puts "T: #{t}"

end

dna "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

def count_nucleotides string

  nucleotides = {
    'A' => 0,
    'C' => 0,
    'G' => 0,
    'T' => 0,
    'error' => 0
  }

string.each_char do |char|
  if nucleotides.keys.include? char
    nucleotides[char] += 1

  else
    nucleotides["error"] += 1
  end
end

  puts nucleotides
  nucleotides.map {|k, v| puts "#{k}: #{v}"}

end


count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
