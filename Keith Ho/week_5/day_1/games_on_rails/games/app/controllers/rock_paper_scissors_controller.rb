class RockPaperScissorsController < ApplicationController
  def rock_paper_scissors

  end

  def results
    game = {1 => "Rock", 2 => "Paper", 3 =>"Scissors"}
    @computer_choice = game[rand(1..3)]
    @choice = params[:throw].capitalize
    if @computer_choice == @choice
      @results = "It is a tie."
    else
       if @choice == "Rock"
         if @computer_choice == "Paper"
           @results = "You lose."
         else
           @results = "You win."
         end
       end
       if @choice == "Paper"
         if @computer_choice == "Rock"
           @results = "You win."
         else
           @results = "You lose."
         end
       end
       if @choice == "Scissors"
         if @computer_choice == "Paper"
           @results = "You win."
         else
           @results = "You lose."
         end
       end
    end
  end
end
