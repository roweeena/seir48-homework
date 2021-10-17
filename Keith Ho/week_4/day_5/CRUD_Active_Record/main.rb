require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "database.sqlite3"
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Album < ActiveRecord::Base
end

class Song < ActiveRecord::Base
end

get "/" do
  erb :home
end

get "/albums" do
  @albums = Album.all
  erb :albums_index
end

get "/albums/new" do
  erb :albums_new
end

post "/albums" do
  album = Album.new
  album.name = params[:name].upcase
  album.image = params[:image]
  if params[:thumbs_up] == "on"
    album.thumbs_up = 1
  else
    album.thumbs_up = 0
  end

  album.save

  redirect to("/albums/#{ album.id }")
end

get "/albums/:id" do
  @album = Album.find params[:id]
  erb :albums_show
end

get "/albums/:id/edit" do
  @album = Album.find params[:id]
  erb :albums_edit
end

post "/albums/:id" do
  album = Album.find params[:id]
  album.name = params[:name]
  album.image = params[:image]
  if params[:thumbs_up] == "on"
    album.thumbs_up = 1
  else
    album.thumbs_up = 0
  end

  album.save

  redirect to("/albums/#{ album.id }")
end

get "/albums/:id/delete" do
  album = Album.find params[:id]
  album.destroy
  redirect to("/albums")
end

get "/songs" do
  @songs = Song.all
  erb :songs_index
end

get "/songs/new" do
  erb :songs_new
end

post "/songs" do
  song = Song.new
  song.name = params[:name].capitalize
  song.image = params[:image]
  if params[:thumbs_up] == "on"
    song.thumbs_up = 1
  else
    song.thumbs_up = 0
  end

  song.save

  redirect to("/songs/#{ song.id }")
end

get "/songs/:id" do
  @song = Song.find params[:id]
  erb :songs_show
end

get "/songs/:id/edit" do
  @song = Song.find params[:id]
  erb :songs_edit
end

post "/songs/:id" do
  song = Song.find params[:id]
  song.name = params[:name]
  song.image = params[:image]
  if params[:thumbs_up] == "on"
    song.thumbs_up = 1
  else
    song.thumbs_up = 0
  end

  song.save

  redirect to("/songs/#{ song.id }")
end

get "/songs/:id/delete" do
  song = Song.find params[:id]
  song.destroy
  redirect to("/songs")
end

after do
  ActiveRecord::Base.connection.close
end
