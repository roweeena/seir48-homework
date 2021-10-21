require "pry"

def arabic_to_roman arabic
  roman = {
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

  roman_numerals = ''

  while arabic > 0
    n = roman.keys.first # The highest remaining Arabic key
    if arabic >= n
      roman_numerals << roman[n]
      arabic -= n
    else
      roman.shift
    end
  end

  roman_numerals
end

# binding.pry
