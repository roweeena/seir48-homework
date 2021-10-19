class NumberController < ApplicationController

def guess

end

def check
  @answer = rand(1..10)
  @guess = params[:number_guess]

  if @answer == params[:number_guess].to_i
    render :win
  else
    render :lose
  end

end


end
