class RpsController < ApplicationController

choices = ["rock", "paper", "scissors"]
@random = choices.sample()

@selection = params[":selection"].to_s

@won = "Awesome!! You Won!!"
@lost = "Ouch!! Wanna give it another go?!"
@draw = "Draw!!"

  if @selection == "rock" && @random == "rock"
    @draw
  elsif @selection == "rock" && @random == "paper"
    @lose
  elsif @selection == "rock" && @random == "scissors"
    @win

  elsif @selection == "paper" && @random == "rock"
    @win
  elsif @selection == "paper" && @random == "paper"
    @draw
  elsif @selection == "paper" && @random == "scissors"
    @lose

  elsif @selection == "scissors" && @random == "rock"
    @lose
  elsif @selection == "scissors" && @random == "paper"
    @win
  elsif @selection == "scissors" && @random == "scissors"
    @draw
  else
  end

end


#   def rps
#     choices = [""rock"", "paper", "scissors"]
#
#     @computer = choices.sample()
#     @selection = params[":choice"]
#
#       @won = "Awesome!! You Won!!"
#       @lost = "Ouch!! Wanna give it another go?!"
#       @draw = "Draw!!"
#
#
# when selection
#     @outcome = case @selection
#     when @computer == choices[0] && @selection == "rock"
#       @draw
#     elsif @computer == choices[1] && @selection == "paper"
#       @won
#     elsif @computer == choices[2] && @selection == "scissors"
#       @lost
#     end
#   end
#
# end
