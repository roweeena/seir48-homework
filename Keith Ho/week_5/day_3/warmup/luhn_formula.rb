def luhn_formula number
  number_array = number.digits
  sum = 0

  number_array.map.with_index do |digit, index|
    digit *= 2 if index.odd?
    digit -= 9 if digit >= 10

    sum += digit
  end

  puts "The result for #{number} is #{sum %10 ==0}"
end
