require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    @hotsauces = query_db 'SELECT * FROM hotsauces'
    erb :home 
end 

# INDEX - show all sauces:
get '/hotsauces' do
    @hotsauces = query_db 'SELECT * FROM hotsauces'
    # pass data down to view:
    erb :hotsauces_index
end


# NEW - hotsauce form page:
get '/hotsauces/new' do
    erb :hotsauces_new
end    

# CREATE - inserts new hotsauce into db 
post '/hotsauces' do
    query_db "INSERT INTO hotsauces (name, pepper, spice_level, image) VALUES ('#{ params[:name] }', '#{ params[:pepper] }', '#{ params[:spice_level] }', '#{ params[:image] }')"
    redirect to('/hotsauces')
end

# SHOW - a single hotsauce:
get '/hotsauces/:id' do
    hotsauces = query_db "SELECT * FROM hotsauces WHERE id=#{params[:id]}"
    @hotsauce = hotsauces.first #extract first hotsauce from array   
    erb :hotsauces_show
end

# EDIT - a single hotsauce:
get '/hotsauces/:id/edit' do
    hotsauces = query_db "SELECT * FROM hotsauces WHERE id=#{params[:id]}"
    @hotsauce = hotsauces.first #extract first hotsauce from array   
    erb :hotsauces_edit
end    

# UPDATE - updates existing hotsauce:
post '/hotsauces/:id' do
    query_db "UPDATE hotsauces SET name='#{ params[:name] }', pepper='#{ params[:pepper] }', spice_level='#{ params[:spice_level] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/hotsauces/#{ params[:id] }")
end

# DELETE - deletes hotsauce:
get '/hotsauces/:id/delete' do 
    query_db "DELETE FROM hotsauces WHERE id=#{ params[:id] }"
    redirect to("/hotsauces")
end


# function to clean it up - opens the db connection
def query_db(sql_statement)
    # create db connection:
    db = SQLite3::Database.new 'hotsauces.sqlite3'
    # set results_as_hash_true
    db.results_as_hash = true
    # execute query
    results = db.execute sql_statement
    # close the db connection
    db.close
    # pass data down to view
    results # implicit return
end   