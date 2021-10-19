require 'pry'


    ROMAN = {
        1000 => "M",
        900 => "CM",
        500 => "D",
        400 => "CD",
        100 => "C",
        90 => "XC",
        50 => "L",
        40 => "XL",
        10 => "X",
        9 => "IX",
        5 => "V",
        4 => "IV",
        1 => "I"
    }
  
    result = ""

    def arabic_roman
        
        ROMAN.reduce(self) { |number, (divider, letter)|
          letter_multiplier, remainder = number.divmod(divider)
          result << (letter * letter_multiplier)
          remainder
        }
        result
      end
    

    result
end

puts arabic_roman 1000


binding.pry
