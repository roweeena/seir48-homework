def numOfNucleotides string
    
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
            nucleotides['error'] += 1
        end
    end

    puts nucleotides

    if nucleotides['error'] > 0
        puts "Not a valid genome"
    end
    nucleotides.map {|k,v| puts "#{k}: #{v}"}
end

numOfNucleotides("AAGAGGGGCCCTTTTTTW")