class RockController < ApplicationController

  def index
  end

  def playerwins()
    @result = "Congratulations, #{params[:player_choice]} beats #{@computer_choice}"
  end

  def computerwins()
    @result = "You fool, #{@computer_choice} beats #{params[:player_choice]}. Clowns are coming for you."
  end

  def drawgame()
    @result = "You and the computer are on the same page it appears, now the clowns will take you both."
  end

  def results
    choices = ['Rock', 'Paper', 'Scissors']
    @computer_choice = choices[rand(0..2)]
    if params[:player_choice] == @computer_choice
      drawgame()
    elsif params[:player_choice] == 'Rock' && @computer_choice == 'Scissors' ||
          params[:player_choice] == 'Scissors' && @computer_choice == 'Paper' ||
          params[:player_choice] == 'Paper' && @computer_choice == 'Rock'
            playerwins()
    else
      computerwins()
    end
  end

end
