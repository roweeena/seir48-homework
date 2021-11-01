#Rovena solution!
def luhn num

  sum = 0

  array_num = num.digits # array of numbers severse and sorted

  array_num.map.with_index do |digit, index|
    puts "#{digit}, #{index} mapped like"
   digit *= 2 if index.odd?
   digit -= 9 if digit >=10

   sum += digits


end

puts "The result for #{num} is #{sum % 10 == 0}"

end

luhn 3554
luhn 8763


# def formula input
# s1 = s2 = 0

# input.to_s.reverse.chars.each_slice(2) do |odd, even|

# s1 += odd.to_i
#  double = even.to_i * 2
#  double -= 9 if double >= 10

#  s2 += double
# end

# (s1 + s2) % 10 == 0 ? 'valid' : 'invalid'

#  end

# formula 3554
# formula 8763
