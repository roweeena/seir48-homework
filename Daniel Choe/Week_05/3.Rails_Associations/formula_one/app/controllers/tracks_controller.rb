class TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def new
    @track = Track.new
  end

  def create
    track = Track.create track_params
    redirect_to track_path(track.id)
  end

  def show
    @track = Track.find params[:id]
  end

  def edit
    @track = Track.find params[:id]
  end

  def update
    track = Track.find params[:id]
    track.update track_params
    redirect_to track_path(track.id)
  end

  def destroy
    track = Track.find params[:id]
    track.destroy
    redirect_to tracks_path
  end

  private
  def track_params
    params.require(:track).permit(:name, :country, :track_type, :length, :image, :driver_id)
  end

end
