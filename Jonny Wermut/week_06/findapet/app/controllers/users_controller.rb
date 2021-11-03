class UsersController < ApplicationController
  before_action :check_for_admin, :only => [:index]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def show
    breeder = Breeder.find params[:id]
    @users = breeder.users
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id #Log them in with that user id
      redirect_to root_path # You can redirect wherever you like.
    else
      render :new # show them the form again and let them have another go.
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :isBreeder, :email, :password, :password_confirmation)
  end

end
