class StylesController < ApplicationController

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
    @style = Style.find params[:id]
  end

  def create
    style = Style.create style_params
    redirect_to style 
  end
  
  def new
    grab_all
    @style = Style.new
  end

  def edit
    grab_all
    @style = Style.find params[:id]
  end

  def update
    style = Style.find params[:id]
    style.update style_params
    redirect_to style
  end

  def destroy
    style = Style.find params[:id]
    style.destroy
    redirect_to styles_path
  end

  private
  def style_params # strong params (see docs)
    params.require(:style).permit(:style_name, :origin_country)
  end

end
