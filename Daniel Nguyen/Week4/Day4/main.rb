require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/films' do
  @films = query_db 'SELECT * FROM films ORDER BY rating DESC'
  erb :film_index
end

# NEW
get '/films/new' do
  erb :films_new
end

# CREATE
post '/films' do
  query_db "INSERT INTO films (title, director, year, description, rating) VALUES ('#{ params[:title] }', '#{ params[:director] }', '#{ params[:year].to_i }', '#{ params[:description] }', '#{ params[:rating].to_f }')"
  redirect to '/films'
end

# READ
get '/films/:id' do
  @film = (query_db "SELECT * FROM films WHERE id=#{ params[:id] }").first
  erb :films_info
end

# EDIT
get '/films/:id/edit' do
  @film = (query_db "SELECT * FROM films WHERE id=#{ params[:id] }").first
  erb :films_edit
end

# UPDATE
post '/films/:id' do
  query_db "UPDATE films SET title='#{ params[:title]}', director='#{ params[:director] }', year='#{ params[:year] }', description='#{ params[:description] }', rating='#{ params[:rating] }' WHERE id=#{ params[:id] }"
  redirect to "/films/#{ params[:id] }"
end

# DELETE
get '/films/:id/delete' do
  query_db "DELETE FROM films WHERE id=#{ params[:id] }"
  redirect to '/films'
end

def query_db sql_statement
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
