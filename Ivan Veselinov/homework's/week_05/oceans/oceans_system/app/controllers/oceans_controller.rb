class OceansController < ApplicationController

  def home
    @oceans = Ocean.all
  end

  def show
    @ocean = Ocean.find params[:id]
  end

  def new
  end

  def create
  ocean = Ocean.create params[:id]
  ocean.name = params[:name]
  ocean.country = params[:country]
  ocean.water = params[:water]
  ocean.watervolume = params[:watervolume]
  ocean.temperature = params[:temperature]
  ocean.maxwidth = params[:maxwidth]
  ocean.maxdepth = params[:maxdepth]
  ocean.image = params[:image]
  ocean.save
  redirect_to ocean_path(ocean.id)
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
  ocean = Ocean.find params[:id]
  ocean.name = params[:name]
  ocean.country = params[:country]
  ocean.water = params[:water]
  ocean.watervolume = params[:watervolume]
  ocean.temperature = params[:temperature]
  ocean.maxwidth = params[:maxwidth]
  ocean.maxdepth = params[:maxdepth]
  ocean.image = params[:image]
  ocean.save
  redirect_to ocean_path(ocean.id)
  end

  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end
end
