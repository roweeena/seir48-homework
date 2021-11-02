# # Luhn Formula
#
# Write a program that can take a number and determine whether or not it is valid per the Luhn formula.
#
# This number must pass the following test:
#
# Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit. For any digits that thus become 10 or more, subtract 9 from the result.
#
# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).
#
# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.
#
# If the total ends in 0 (put another way, if the total modulus 10 is 0), then the number is valid according to the Luhn formula; otherwise it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).
#
# Write a program that, given a number, can check if it is valid per the Luhn formula.
#
# ```ruby
# luhn 3554
# # => false
#
# luhn 8763
# # => true
# ```


def luhn num

  sum = 0

  arr = num.to_s.split('').reverse

  arr.map.with_index do |d, i|

    d = d.to_i

    d *= 2 if i.odd?
    d -= 9 if d >= 10

    sum += d

  end

  puts "The result for #{ num } is #{ sum % 10 == 0 }."

end


luhn 8763
luhn 3554
luhn 1111
