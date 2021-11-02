class Magic8ballController < ApplicationController

  def question
    # raise "hell"

  end

def results

  answers = [
  "Dream on.",
  "Nice try.",
  "As if.",
 "Try Again.",
"It is certain.",
 "It is decidedly so.",
 "Without a doubt.",
 "Yes, definitely.",
 "You may rely on it.",
 "As I see it, yes.",
 "Most likely.",
 "Outlook good.",
 "This is true.",
 "Signs point to yes.",
 "Reply hazy try again.",
 "Ask again later.",
  "Better not tell you now.",
 "Cannot predict now.",
 "Concentrate and ask again.",
 "Don't count on it.",
 "My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."
]

# @question = params[:question]

@random_answer = answers[rand(24)]

end

end
