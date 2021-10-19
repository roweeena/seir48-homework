class PlayersController < ApplicationController
  def index
    @players = Player.all
  end

  def show
    @player = Player.find params[:id]
  end

  def new
  end

  def add
    player = Player.new
    player.name = params[:name].titleize
    player.position = params[:position].upcase
    player.club = params[:club].upcase
    player.scores = params[:scores]
    player.save

    redirect_to player_path(player.id)
  end
end
