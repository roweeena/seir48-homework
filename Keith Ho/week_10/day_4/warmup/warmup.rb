
class Calculator
  def initialize question
    @question = question
    clean_up_question
  end

  def clean_up_question
    @question = @question
      .gsub(' minus ', '-')
      .gsub(' plus ', '+')
      .gsub(' multiplied by ', '*')
      .gsub(' divided by ', '/')
      .gsub(/[^0-9+*\/-]+/m, '')
  end

  def answer
    @answer = eval(@question)
  end

end


query1 = Calculator.new('What is 5 minus 10')
query2 = Calculator.new('What is 5 plus 10')

puts query1.answer
puts query2.answer
