require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
  erb :home
end

get '/movies' do
  @movies = query_db 'SELECT * FROM movies'
  erb :movies_index

#NEW MOVIE
get '/movies/new' do
  erb :movies_new
end

post '/movies' do
  query_db "INSERT INTO movies (name, year) VALUES ('#{params[:name]}', '#{params[:year]}')"
  redirect to ("/movies")
end

#READ EACH MOVIE
get '/movies/:id' do
  movies = query_db "SELECT * FROM countries WHERE id=#{params[:id]}"
  @movie = movies.first
  erb :movie_info
end

#EDIT MOVIE

get '/movie/:id/edit' do
  movies = query_db "SELECT * FROM movies WHERE id=#{params[:id]}"
  @movie = movies.first
  erb :movie_edit

post '/movies/:id' do
  query_db "UPDATE movies SET name='#{params[:name]}', year='#{params[:year]}' WHERE id=#{params[:id]}"
  redirect to ("movies/#{params[:id]}")
end

#DELETE

get '/movies/:id/delete' do
  query_db "DELETE FROM movies WHERE id=#{params[:id]}"
  redirect to ("/movies")
 end
