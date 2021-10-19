require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX: Show all butterflies
get '/games' do
    @games = query_db 'SELECT * FROM games'
    erb :games_index
end

# NEW: Shows a form for new butterfly data
get '/games/new' do 
    erb :games_new
end

# CREATE: Inserts a new butterfly into the database
# Use Post when changing things
post '/games' do
    query_db "INSERT INTO games (name, description, rating) VALUES ('#{params[:gameName]}', '#{params[:description]}', '#{params[:rating]}')"
    # Returns to main page
    redirect to('/games')
end

# SHOW: Show all the information about a SINGLE butterfly
get '/games/:id' do
    games = query_db "SELECT * FROM games WHERE id=#{params[:id]}"
    @games = games.first
    erb :butterflies_show
end

# EDIT: Displays a form with existing data for the user to edit a butterfly.
get '/games/:id/edit' do
    games = query_db "SELECT * FROM games WHERE id=#{params[:id]}"
    @games = games.first
    erb :games_edit
end

# UPDATE: Updates an existing butterfly in the database with new information.
# Seems post is generally formatted with an action, followed by redirection to the original source
post '/games/:id/edit' do 
    query_db "UPDATE games SET name='#{ params[:id] }', '#{ params[:description] }', '#{ params[:rating] }'"
    redirect to("/games/#{ params[:id] }")
end

# DELETE: Deletes a butterfly from the database.
get '/games/:id/delete' do
    query_db "DELETE FROM games WHERE id='#{ params[:id] }'"
    redirect to("/games")
end

# Simplifies the pull requirements
def query_db(sql_statement)
    puts sql_statement
    # Defines which database is being accessed
    # Unfortunately hardcoded, but can be optimised later
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    # Finds the resulting output from the original inputted sql command
    results = db.execute sql_statement
    # Always close it so that it prevents any issues from arising in the future
    db.close
    results 
  end