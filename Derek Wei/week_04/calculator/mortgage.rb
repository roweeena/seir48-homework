# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

puts "==" * 10
puts "Mortgage Calculator".center(20)
puts "==" * 10

print "How much do you need to borrow? "
principal = gets.to_f

print "What is the annual interest rate in %? "
annual_interest = gets.to_f

print "What is the length of your loan in years? "
years = gets.to_f


def mortgage_calc (p, a, y)
  n = y * 12
  i = a / (12 * 100)

  numerator = (i * (1 + i) ** n)
  denominator = ((1 + i) ** n) - 1

  monthly_repayments = p * numerator/denominator

  puts "Your monthly repayments over #{ y } years for a mortgage of $#{ p } is $#{ monthly_repayments.round(2) }."
end

mortgage_calc(principal, annual_interest, years)
