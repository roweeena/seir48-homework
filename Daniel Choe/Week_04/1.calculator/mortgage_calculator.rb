# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

puts "How much would you like to borrow? "
principle = gets.chomp.to_f
puts "How many years is your loan term? "
term = gets.chomp.to_f
puts "What is your annual interest rate? "
a_rate = gets.chomp.to_f

# convert annual rate to monthly rate.
a_rate_dec = a_rate / 100
m_rate = a_rate_dec / 12
m_term = term * 12

# monthly_payment = (principle * (1 + m_rate) ** m_term) / (((1 + m_rate) ** m_term) - 1)

numerator1 = (1 + m_rate)
# puts numerator1
numerator0 = numerator1 * m_rate
numerator2 = numerator0 ** m_term
# puts numerator2
denominator1 = numerator1 ** m_term
# puts denominator1
denominator2 = denominator1 - 1
# puts denominator2

division = (numerator2 / denominator2)
monthly_payment = division * principle
puts monthly_payment

# puts "your monthly payment is #{ monthly_payment.round(2) }"
