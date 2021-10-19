class WondersController < ApplicationController

  def home
  end

  def index
    @wonders = Wonder.all
  end

  def show
    @wonder = Wonder.find params[:id]

  end

  def new
  end

  def create
    wonder = Wonder.create :name => params[:name], :description => params[:description], :image => params[:image], :location => params[:location], :year => params[:year], :video => params[:video]

    redirect_to wonder_path(wonder.id)
  end

  def edit
    @wonder = Wonder.find params[:id]
  end

  def update
    wonder = Wonder.find params[:id]
    wonder.update :name => params[:name], :description => params[:description], :image => params[:image], :location => params[:location], :year => params[:year], :video => params[:video]

    redirect_to wonder_path(wonder.id)
  end

  def destroy
    wonder = Wonder.find params[:id]
    wonder.destroy
    redirect_to wonders_path
  end
end
