class MyfoodsController < ApplicationController
  before_action :check_for_login

  def new
    @myfood = Myfood.new
  end

  def create
    myfood = Myfood.create myfood_params
    @current_user.myfoods << myfood
    redirect_to root_path
  end

  private
  def myfood_params
    params.require(:myfood).permit(:title)
  end
end
