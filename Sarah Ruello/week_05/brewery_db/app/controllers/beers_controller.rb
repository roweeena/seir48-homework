class BeersController < ApplicationController
  
  # grabber function for side menu:
  def grab_all
    @beers = Beer.all 
    @styles = Style.all
  end     
  
  def index
    grab_all
  end

  def show
    grab_all
    @beer = Beer.find params[:id]
  end

  def new
    grab_all
    @beer = Beer.new
  end

  def create
    grab_all
    beer = Beer.create beer_params
    redirect_to beer
  end

  def edit
    grab_all
    @beer = Beer.find params[:id]
  end

  def update
    grab_all
    beer = Beer.find params[:id]
    beer.update beer_params
    redirect_to beer
  end

  def destroy
    grab_all
    beer = Beer.find params[:id]
    beer.destroy
    redirect_to beers_path
  end

  private
  def beer_params
    params.require(:beer).permit(:beer_name, :brand, :abv, :image, :style_id)
  end
end
