require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX: Show all butterflies
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# NEW: Shows a form for new butterfly data
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE: Inserts a new butterfly into the database
post '/butterflies' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  redirect to('/butterflies')
end

# SHOW: Show all the information about a SINGLE butterfly
get '/butterflies/:id' do
# returns an array
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }" 
# extract the first butterfly from the array
  @butterfly = butterflies.first
  erb :butterflies_show
end

# EDIT: Displays a form with existing data for the user to edit a butterfly.
get '/butterflies/:id/edit' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }" 
  @butterfly = butterflies.first 
  erb :butterflies_edit
end

# UPDATE: Updates an existing butterfly in the database with new information.
post '/butterflies/:id' do
  query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/butterflies/#{ params[:id] }")
end

# DELETE: Deletes a butterfly from the database.
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
  redirect to("/butterflies")
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  # implicit return
  results 
end