require 'sinatra'
require 'sinatra/reloader'
require 'SQLite3'

get '/' do
  erb :home
end

get '/albums' do
  @albums = query_db "SELECT * FROM killers"
  erb :albums_index
end

get '/albums/new' do
  erb :albums_new
end

post '/albums' do
  query_db "INSERT INTO killers (name, year, image, song) VALUES ('#{params[:name]}', '#{params[:year]}', '#{params[:image]}', '#{params[:song]}')"
  redirect to('/albums')
end

get '/albums/:id' do
  albums = query_db "SELECT * FROM killers WHERE id=#{params[:id]}"
  @album = albums.first
  erb :albums_show
end

get '/albums/:id/edit' do
  albums = query_db "SELECT * FROM killers WHERE id=#{params[:id]}"
  @album = albums.first
  erb :albums_edit
end

post '/albums/:id' do
  query_db "UPDATE killers SET name='#{params[:name]}', year ='#{params[:year]}', image='#{params[:image]}', song='#{params[:song]}' WHERE id=#{params[:id]}"
  redirect to ('/albums')
end

get '/albums/:id/delete' do
  query_db "DELETE FROM killers WHERE id=#{params[:id]}"
  redirect to('/albums')
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
