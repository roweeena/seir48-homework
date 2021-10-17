require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# ActiveRecord Initialisation: =================================================

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)

# MODELS: ======================================================================

class Artist < ActiveRecord::Base
end

class Song < ActiveRecord::Base
end

# ==============================================================================

get '/' do
  erb :home
end

# ARTISTS: =====================================================================

# INDEX
get '/artists' do
  @artists = Artist.all
  erb :artists_index
end

# NEW
get '/artists/new' do
  erb :artists_new
end

# CREATE
post '/artists' do
  artist = Artist.create(
    name: params[:name],
    genres: params[:genres],
    image: params[:image],
  )

  redirect to("/artists/#{ artist.id }")
end

# SHOW
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_detail
end

# EDIT
get '/artists/:id/edit' do
  @artist = Artist.find params[:id]
  erb :artists_edit
end

# UPDATE
post '/artists/:id' do
  artist = Artist.find params[:id]
  artist.name = params[:name]
  artist.genres = params[:genres]
  artist.image = params[:image]

  artist.save

  redirect to("/artists/#{ artist.id }")
end

# DELETE
get 'artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to('/artists')
end

# SONGS: =======================================================================

# INDEX

# NEW

# CREATE

# SHOW

# EDIT

# UPDATE

# DELETE

after do
  ActiveRecord::Base.connection.close
end
