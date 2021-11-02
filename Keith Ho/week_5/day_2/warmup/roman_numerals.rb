@roman = {
1000 => 'M',
900 => 'CM',
500 => 'D',
400 => 'CD',
100 => 'C',
90 => 'XC',
50 => 'L',
40 => 'XL',
10 => 'X',
9 => 'IX',
5 => 'V',
4 => 'IV',
1 => 'I'
}

def roman_numerals num
  result = ""
  @roman.each do |key, value|
    while num >= key
      result += value
      num -= key
    end
  end
    puts result
end

roman_numerals 56
