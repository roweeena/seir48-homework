require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)
  
ActiveRecord::Base.logger = Logger.new(STDERR)

class Movie < ActiveRecord::Base
end

class Actor < ActiveRecord::Base
end

get '/' do
  erb :home
end
#index:SHOW ALL THE MOVIES
get '/movies' do
    @movies = Movie.all
    erb :movies_index
end
#NEW : SHOWS A LIST TO CREAT A NEW MOVIE
get '/movies/new' do
    erb :movies_new
end
# CREATE : INSERT THE INFOR FROM THE FORM FROM NEW MOVIE INTO THE DATABASE
post '/movies' do
    movie = Movie.new
    movie.name = params[:name]
    movie.year = params[:year]
    movie.director = params[:director]
    movie.image = params[:image]
    movie.trailer = params[:trailer]
    movie.save
    redirect to("/movies/#{movie.id}")
end

#SHOWING THE INFOR ABOUT A SINGLE MOVIE___SHOW PAGE
get '/movies/:id'  do
    @movie = Movie.find params[:id]
    erb :movies_show
end

get '/movies/:id/edit' do
    @movie = Movie.find params[:id]
    erb :movies_edit
end
# UPDATE: Updates an existing movie in the database with new information.
post '/movies/:id' do
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.year = params[:year]
    movie.director = params[:director]
    movie.image = params[:image]
    movie.trailer = params[:trailer]
    movie.save
    redirect to("/movies/#{movie.id}")
end
# DELETE : deleting a  movie from the database
get '/movies/:id/delete' do
    movie = Movie.find params[:id]
    movie.destroy
    redirect to('/movies')
end
#################ACTORS###################

get '/actors' do
    @actors = Actor.all
    erb :actors_index
end
#NEW : SHOWS A LIST TO CREAT A NEW Actor
get '/actors/new' do
    erb :actors_new
end
# CREATE : INSERT THE INFOR FROM THE FORM FROM NEW MOVIE INTO THE DATABASE
post '/actors' do
    actor = Actor.new
    actor.name = params[:name]
    actor.date_of_birth = params[:date_of_birth]
    actor.image = params[:image]
    actor.save
    redirect to("/actors/#{actor.id}")
end
#SHOWING THE INFOR ABOUT A SINGLE MOVIE___SHOW PAGE
get '/actors/:id'  do
    @actor = Actor.find params[:id]
    erb :actors_show
end

get '/actors/:id/edit' do
    @actor = Actor.find params[:id]
    erb :actors_edit
end
post '/actors/:id' do
    actor = Actor.find params[:id]
    actor.name = params[:name]
    actor.date_of_birth = params[:date_of_birth]
    actor.image = params[:image]
    actor.save
    redirect to("/actors/#{actor.id}")
end
# DELETE : deleting a  actor from the database
get '/actors/:id/delete' do
    actor = Actor.find params[:id]
    actor.destroy
    redirect to('/actors')
end
