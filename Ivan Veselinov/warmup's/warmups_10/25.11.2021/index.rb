# # Wordy Calculator

# Create code in Ruby or Javascript that takes word problems in the following formats:

# and returns the answer as an integer.

# To do this, you should define a calculator which has an answer method to return the answer.
# Eg. `const query1 = calculation("What is 10 plus 4?");` or `const query1 = new Calculation("What is 10 plus 4?");`
# Then `query1.answer();` to get your result.

# You may want to refer back to [this page from gitbook if working in Javascript](https://sei48tas.gitbook.io/sei48/week-1/day-5-advance-objects-and-function
# ), or [this page if in Ruby](https://sei48tas.gitbook.io/sei48/week4/day-5-activerecord)

# Use a regular expression to parse the question.


            # My Solution
# puts "Wordy Calculator"
# puts "Choose : Minus, Plus, Devide, Multiplied"
#
#
# puts "Enter 2 values a & b"
# puts" <>" * 40
# puts "insert value for A"
#
# a = gets.chomp.to_f
#
# puts "insert operator"
# word = gets.chomp.to_s
#
# puts "input value for b"
# b = gets.chomp.to_f
#
#
#
# if word == "plus"
#   result = a + b
#   puts "Your current result is #{a} + #{b} = #{result}"
# elsif word == "minus"
#   result = a - b
#   puts "Your current choise is #{a} - #{b} = #{result}"
# elsif word == "devide"
#   result = a / b
#   puts "Your current choise is #{a} / #{b} = #{result}"
# elsif word == "multiplied"
#   result = a * b
#   puts "Your current choise is #{a} * #{b} =  #{result}"
# end


# > What is 5 plus 13?

# > What is 7 minus 5?

# > What is -6 multiplied by 4?

# > What is 25 divided by -5?


# PAT SOLUTION!!!!

class Calculator

  def initialize question
    @question = question
    clean_up_question
  end

  #clean up question
    def clean_up_question
          # take cleaned up #quesiton
    @question = @question
    .gsub('minus', '-')
    .gsub('plus', '+')
    .gsub('multiplied by', '*')
    .gsub('devided by', '/')
    .gsub(/[^0-9x+*\/-]+/m, '') # [^0-9x+*/-] Skip everything exept (0-9x+*/-) ^skip
      #return it
    end

    def answer
        # take chaned up @# QUESTION:
      @answer = eval(@question)
      # change it from a string to executable thing
      #return it
    end


end


query1 = Calculator.new('What is 5 minus 10');
query2 = Calculator.new('What is 5 plus 10');
query3 = Calculator.new('What is 5 devided by 10');


puts query1.answer
puts query2.answer
puts query3.answer
