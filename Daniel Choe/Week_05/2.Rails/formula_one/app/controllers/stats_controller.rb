class StatsController < ApplicationController

  def home
  end

  def index
    @stats = Stat.all
  end

  def show
    @stat = Stat.find params[:id]
  end

  def edit
    @stat = Stat.find params[:id]
  end

  def update
    stat = Stat.find params[:id]
    stat.full_name = params[:full_name]
    stat.image = params[:image]
    stat.team = params[:team]
    stat.points = params[:points]

    stat.save
    redirect_to stat_path(stat.id)
  end

  def new
  end

  def create
    driver = Stat.create :full_name => params[:full_name], :image => params[:image], :team => params[:team], :points => params[:points]
    redirect_to stat_path(driver.id)
  end

  def destroy
    stat = Stat.find params[:id]
    stat.destroy
    redirect_to index_path
  end

end
