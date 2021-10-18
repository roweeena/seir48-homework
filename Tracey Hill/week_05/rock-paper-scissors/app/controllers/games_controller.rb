class GamesController < ApplicationController
    def rock_paper_scissors_play
        
        throws = ["rock", "paper", "scissors"]

        @user_throw = params[:throw]

        @random_throw = throws.shuffle.first

        @winner = @user_throw == @random_throw

        render :play
    end
end