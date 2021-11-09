class MagicController < ApplicationController

  def magic

  end

  def result
    @input = params[:ask].capitalize
    @answer = ["Yes you Can", "No you Can't"]
    @result = @answer.sample
  end

end
