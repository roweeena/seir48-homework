class SecretController < ApplicationController

  def index
    @numbers=(1..10).to_a
  end

  def results
    @winning_number = rand(1..10)
    if params[:lucky_number].to_i == @winning_number.to_i
      @result = 'You won!! Too bad the clowns are already on their way...'
    else
      @result = 'You lose. Clowns are now devouring your corpse'
    end
  end

end
