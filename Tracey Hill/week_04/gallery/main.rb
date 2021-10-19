require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class backed by a database table
class Work < ActiveRecord::Base
end
class Artist < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX: Show all works
get '/works' do
  @works = Work.all
  erb :works_index
end

# NEW: Shows a form for new work data
get '/works/new' do
    erb :works_new
end

# CREATE inserts a new work into the database
post '/works' do
    work = Work.new
    work.title = params[:title]
    work.artist = params[:artist]
    work.meduim = params[:meduim]
    work.image = params[:image]
    work.save

    redirect to("/works/#{ work.id }")
end

# EDIT displays a form with existing data for the user to edit
get '/works/:id/edit' do
    @work = Work.find params[:id]
    erb :works_edit
end

# SHOW: work information
get '/works/:id' do
    @work = Work.find params[:id]
    erb :works_show
  end

# UPDATES an existing work with new info
post '/works/:id' do
    work = Work.find params[:id]
    work.title = params[:title]
    work.artist = params[:artist]
    work.medium = params[:medium]
    work.image = params[:image]

    work.save

    redirect to("/works/#{ params['id'] }")
end

#DELETE Deletes a work from the database
get '/works/:id/delete' do
    work = Work.find params[:id]
    work.destroy
    redirect to("/works")
end

# artists crud

get '/' do
    erb :home
  end
  
  # INDEX: Show all artists
  get '/artists' do
    @artists = Artist.all
    erb :artists_index
  end
  
  # NEW: Shows a form for new artist data
  get '/artists/new' do
      erb :artists_new
  end
  
  # CREATE inserts a new artist into the database
  post '/artists' do
      artist = Artist.new
      artist.name = params[:name]
      artist.image = params[:image]
  
      artist.save
  
      redirect to("/artists/#{ artist.id }")
  end
  
  # SHOW: Show all the information about a SINGLE artist
  get '/artists/:id' do
      @artist = Artist.find params[:id]
      erb :artists_show
  end
  
  # EDIT displays a form with existing data for the user to edit
  get '/artists/:id/edit' do
      @artist = Artist.find params[:id]
      erb :artists_edit
  end
  
  # UPDATES an existing artist with new info
  post '/artists/:id' do
      artist = Artist.find params[:id]
      artist.name = params[:name]
      artist.image = params[:image]
  
      artist.save
  
      redirect to("/artists/#{ params['id'] }")
  end
  
  #DELETE Deletes a artist from the database
  get '/artists/:id/delete' do
      artist = Artist.find params[:id]
      artist.destroy
      redirect to("/artists")
  end
