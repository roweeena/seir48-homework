puts "Welcome to Calculator"
puts ""

def menu
	puts "Which function would you like to perform?"
	puts "\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/"
	puts "Type 'a' for addition"
	puts "Type 's' for subtraction"
	puts "Type 'm' for multiplication"
	puts "Type 'd' for division"
	puts "Type 'e' for exponents"
	puts "Type 'rt' for square roots"
	puts "Type 'q' to quit"
end

def newEntry
		menu()
		newEntry = gets.chomp.downcase
		calculate(newEntry)
	end 

def add
	puts "Enter the first number you'd like to add"
	number1 = gets.to_i
	puts "Enter the second number you'd like to add"
	number2 = gets.to_i
	puts "#{number1} + #{number2} is #{number1 + number2}"
	puts ""
end

def subtract
	puts "Enter the number you'd like to subtract from"
	number1 = gets.to_i
	puts "Enter the number you'd like to subtract"
	number2 = gets.to_i
	puts "#{number1} - #{number2} is #{number1 - number2}"
	puts ""
end 

def multiply
	puts "Enter the first number you'd like to multiply"
	number1 = gets.to_i
	puts "Enter the second number you'd like to multiply"
	number2 = gets.to_i
	puts "#{number1} * #{number2} is #{number1 * number2}"
	puts ""
end 

def divide
	puts "Enter the number you'd like to divide"
	number1 = gets.to_i
	puts "Enter the number you'd like to divide by"
	number2 = gets.to_i
	puts "#{number1} divided by #{number2} is #{number1 / number2}"
	puts ""
end 

def exponent
	puts "Enter the first number"
	number1 = gets.to_i
	puts "Enter the number you'd like to use as an exponent"
	number2 = gets.to_i
	puts "#{number1} to the power of #{number2} is #{number1 ** number2}"
	puts ""
end

def sqrt
	puts "Enter the number"
	number = gets.to_i
	puts "The square root of #{number} is #{Math.sqrt(number)}."
	puts ""
end 

menu()
entry = gets.chomp.downcase

def calculate (entry)
unless entry == 'q'
	case entry
		when 'a'
			add()
			newEntry()
		when 's'
			subtract()
			newEntry()
		when 'm'
			multiply()
			newEntry()
		when 'd'
			divide()
			newEntry()
		when 'e'
			exponent()
			newEntry()
		when 'rt'
			sqrt()
			newEntry()
		end
	else
		puts "Thanks for using my calculator"
	end
end 

calculate(entry)

