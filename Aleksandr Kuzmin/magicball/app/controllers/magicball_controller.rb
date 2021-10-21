class MagicballController < ApplicationController

def question

end

def answer

  reply = {
    	1 => "It is certain.",
    	2 => "It is decidedly so",
    	3 => "Without a doubt.",
    	4 => "Yes definitely. ",
    	5 => "You may rely on it.",
    	6 => "As I see it, yes.",
    	7 => "Most likely.",
    	8 => "Outlook good. ",
    	9 => "Yes.",
    	10 => "Signs point to yes.",
    	11 => "Reply hazy, try again.",
    	12 => "Reply hazy, try again. ",
    	13 => "Ask again later.",
    	14 => "Better not tell you now.",
    	15 => "Cannot predict now.",
    	16 => "Concentrate and ask again. ",
    	17 => "Concentrate and ask again.",
    	18 => "Don't count on it.",
    	19 => "My reply is no.",
    	20 => "Outlook not so good.",

    }

random_number = rand(reply.size)
@random_answer = reply[random_number]

end
end
