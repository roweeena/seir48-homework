class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :elevation => params[:elevation], :latitude => params[:latitude], :longitude => params[:longitude], :country => params[:country], :continent => params[:continent], :first_ascent => params[:first_ascent]

    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.elevation = params[:elevation]
    mountain.latitude = params[:latitude]
    mountain.longitude = params[:longitude]
    mountain.country = params[:country]
    mountain.continent = params[:continent]
    mountain.first_ascent = params[:first_ascent]
    mountain.save

    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end
end
