days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

weekdays = days_of_the_week[0, 5]
weekends = days_of_the_week[5, days_of_the_week.length() - 1]

days_of_the_week.unshift("Sunday")
days_of_the_week.pop()

puts "The days of the week are as follows: #{days_of_the_week}"
puts "The weedays are: #{weekdays}"
puts "The weekends are: #{weekends}"