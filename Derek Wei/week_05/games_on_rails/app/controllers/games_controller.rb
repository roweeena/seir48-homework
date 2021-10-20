class GamesController < ApplicationController

  def index
  end

  def magic_form
  end

  def magic_result
    @question = params[:question]
    @word_count =  @question.split(" ").count
  end

  def secret_form
  end

  def secret_result
    @user_choice = params[:number].to_i
    @secret_number = rand(1..10)
    if @secret_number == @user_choice
      render "secret_win.html.erb"
    else
      render "secret_lose.html.erb"
    end
  end

  def rock_paper_scissors_form
  end

  def rock_paper_scissors_play
    @comp_choice = ["Rock", "Paper", "Scissors"].sample

    @user_choice = params[:throw]

    # raise "asd"
    if @comp_choice == @user_choice
      render "rock_paper_scissors_draw.html.erb"
    elsif (@comp_choice == "Rock" && @user_choice == "Scissors") ||
          (@comp_choice == "Paper" && @user_choice == "Rock") ||
          (@comp_choice == "Scissors" && @user_choice == "Paper")
      render "rock_paper_scissors_lose.html.erb"
    else
      render "rock_paper_scissors_win.html.erb"
    end
  end

end
