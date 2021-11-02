require "pry"

def luhn number
  def luhn_double n
    n >= 5 ? n * 2 - 9 : n * 2
  end

  number.digits
        .map.with_index { |n, i| i.even? ? n : luhn_double(n) }
        .sum % 10 == 0
end

binding.pry
