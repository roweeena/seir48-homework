require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
# Next week: Rails will do this for you automatically:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)


# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)
# Model: class backed by a database table
class Artist < ActiveRecord::Base
end

class Album < ActiveRecord::Base
end

get '/' do
  erb :home
end
# INDEX: Show all butterflies
get '/artists' do
  @artists = Artist.all
  erb :artists_index
end

#NEW
get '/artists/new' do
  erb :artists_new
end

#CREATE

post '/artists' do
  artist = Artist.new
  artist.name = params[:name]
  artist.genre = params[:genre]
  artist.image = params[:image]
  artist.save
  redirect to("/artists/#{ artist.id }")
end


#SHOW

# All the information about a single artist
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_show
end


#EDIT
get '/artists/:id/edit' do
@artist = Artist.find params[:id]
erb :artists_edit
end


#UPDATE
post '/artists/:id' do
artist = Artist.find params[:id]
artist.name = params[:name]
artist.genre = params[:genre]
artist.image = params[:image]
artist.save
redirect to ("/artists/#{ params[:id] }")
end


#DELETE
get '/artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to("/artists")
end

############## ALBUMS ###########

#INDEX
get '/albums' do
  @albums = Album.all
  erb :albums_index
end

# NEW
get '/albums/new' do
  erb :albums_new
end

# CREATE
post '/albums' do
album = Album.new
album.name = params[:name]
album.artist_id = params[:artist_id]
album.year= params[:year]
album.image = params[:image]
# album.streaming_link = params[:streaming_link]

album.save
  redirect to("/albums/#{ album.id }") # SHOW
end


#SHOW

# All the information about a single artist
get '/albums/:id' do
  @album = Album.find params[:id]
  erb :albums_show
end


#EDIT
get '/albums/:id/edit' do
 @album = Album.find params[:id]
 erb :albums_edit
end


#UPDATE NEEDS DEBUGGING!

  post '/albums/:id' do
   album = Album.find params[:id]
   album.name = params[:name]
   # album.artist_id = params[:artist_id]
   album.year = params[:year]
   album.image = params[:image]
  # album.streaming_link = params[:streaming_link]
  album.save

  redirect to ("/albums/#{ params[:id] }")
end


#DELETE
get 'albums/:id/delete' do
  album = Album.find params[:id]
  album.destroy
  redirect to ("/albums")
end


after do
  ActiveRecord::Base.connection.close
end
