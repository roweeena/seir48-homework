class GameController < ApplicationController

  def home
  end

  def throw

    @human_throw = params[:throw].capitalize
    @cpu_throw = ['Rock', 'Paper', "Scissors"].sample


    if @human_throw == 'Rock'
      if @cpu_throw == 'Paper'
        render :lose
      else
        render :win
      end
    elsif @human_throw == 'Paper'
      if @cpu_throw == 'Scissors'
        render :lose
      else
        render :win
      end
    elsif @human_throw == 'Scissor'
      if @cpu_throw == 'Rock'
        render :lose
      else
        render :win
      end
    else
      render :draw
    end
  end

end
