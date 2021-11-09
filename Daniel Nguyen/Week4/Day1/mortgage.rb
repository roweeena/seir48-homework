def mortgage_calculator (principal, annual_rate, months)
  monthly_interest_rate = annual_rate.to_f / 1200
  monthly_interest_amount = principal * monthly_interest_rate
  total_interest_amount = monthly_interest_amount * months
  total_due = principal + total_interest_amount
  monthly_due = total_due / months
  puts "$#{ principal } at #{ annual_rate }%pa for { months } months:"
  puts "Monthly Repayments: $#{ monthly_due }"
end

def calculate_mortgage
  puts "Mortgage Calculator:"

  print "How much is the principal? "
  principal = gets.to_i

  print "What is the annual interest rate (%)? "
  annual_rate = gets.to_f

  print "How many months is the mortgage? "
  months = gets.to_i

  mortgage_calculator(principal, annual_rate, months)
end

calculate_mortgage
