class SecretController < ApplicationController
  def secret

  end

  def results
    @random = rand(1..10)
    @guess = params[:number].to_i
    if @random == @guess
      @results = "You guessed the right number."
    else
      @results = "You guessed the wrong number."
    end
  end
end
