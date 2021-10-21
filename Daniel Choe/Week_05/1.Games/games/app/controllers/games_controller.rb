class GamesController < ApplicationController
  def rock_paper_scissors
    # render :rock_paper_scissors
  end

  def rock_paper_scissors_result
    @comp_move = rand(4)
    # render :rock_paper_scissors_result
  end
end
