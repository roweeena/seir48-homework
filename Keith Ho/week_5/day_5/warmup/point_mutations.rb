def point_mutations(dna1, dna2)
  dna1_arr = dna1.split("")
  dna2_arr = dna2.split("")

  n = 0
  count = 0
  while n < dna1_arr.size
    if dna1_arr[n] != dna2_arr[n]
      count += 1
    end
    n += 1
  end

  puts count
end

point_mutations("GAGCCTACTAACGGGAT","CATCGTAATGACGGCCT")

def hamming str1, str2
  result = 0
  str1.split("").each_index do |i|
    result += 1 if str1[i] != str2[i]
    end
  puts result

  [str1.length, str2.length].min.times.count { |i| str1|i| != str2|i|}
end
