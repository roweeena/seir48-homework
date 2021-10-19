class PlayersController < ApplicationController
  def index
    @players = Player.all
  end
  # NEW
  # CREATE
  # SHOW
  # EDIT
  # UPDATE
  # DELETE
end
