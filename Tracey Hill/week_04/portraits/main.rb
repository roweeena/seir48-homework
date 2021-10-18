require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#INDEX: Show all portraits
get '/portraits' do
  #db = SQLite3::Database.new 'database.sqlite3'
  #db.results_as_hash = true
  @portraits = query_db 'SELECT * FROM portraits'
  #db.close
  erb :portraits_index
end

# NEW: Shows a form for new portrait data
get '/portraits/new' do
    erb :portraits_new
end

# CREATE inserts a new portrait into the database
post '/portraits' do
    query_db "INSERT INTO portraits (title, artist, medium, image) VALUES ('#{ params[:title] }', '#{ params[:artist] }' , '#{ params[:medium] }', '#{ params[:image] }')"
    redirect to('/portraits')
end

# SHOW: Show all the information about a SINGLE portrait
# dynamic URL    # open the db

get '/portraits/:id' do
    # db = SQLite3::Database.new 'database.sqlite3'
    # set results_as_a_hash to be true
    # db.results_as_hash = trueabase.new 'database.sqlite3'
    # set results_as_a_hash to be true
    # db.results_as_hash = true
    # SELECT * FROM portraits WHERE id = parms
    portraits = query_db "SELECT * FROM portraits WHERE id=#{ params[:id] }" 
    @portrait = portraits.first
    erb :portraits_show
end

# EDIT displays a form with existing data for the user to edit
get '/portraits/:id/edit' do
    portraits = query_db "SELECT * FROM portraits WHERE id=#{ params[:id] }" 
    @portrait = portraits.first
    erb :portraits_edit
end

# UPDATES an existing portrait with new info
post '/portraits/:id' do
    query_db "UPDATE portraits SET title='#{ params[:title] }', artist='#{ params[:artist] }', image='#{ params[:medium] }', image='#{ params[:image] }' WHERE id='#{ params[:id] }'"
    redirect to("/portraits/#{ params['id'] }")
end

#DELETE Deletes a portrait from the database
get '/portraits/:id/delete' do
    query_db "DELETE FROM portraits WHERE id=#{ params[:id] }"
    redirect to("/portraits")
end

def query_db(sql_statement)
    puts sql_statement # for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # implicit return
end    
