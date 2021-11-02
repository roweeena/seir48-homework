class AlbumsController < ApplicationController
  def index
    @albums = Album.all

  end
  def show
    @album = Album.find params[:id]
  end

  def new
    @album = Album.new # blank template to create a form.
  end

  def create
  album = Album.create album_params
  redirect_to album # show page
 end

 def edit
   @album = Album.find params[:id]
 end

def update
  album = Album.find params[:id]
  Album.update album_params
  redirect_to album
end


 def destroy
   album = Album.find params[:id]
   album.destroy
   redirect_to album_path

end

 private # this makes all the following methods private ( so only use at the end)
 def album_params # strong params ( see docs)
   params.require(:album).permit(:title, :released, :image, :musician_id)
 end
end
