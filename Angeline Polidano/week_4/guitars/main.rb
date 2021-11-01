require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
get '/' do
  erb :home
end
# INDEX: Show all guitars
get '/guitars' do
  @guitars = query_db 'SELECT * FROM guitars'
  erb :guitars_index
end
# NEW: Shows a form for new guitar data
get '/guitars/new' do
  erb :guitars_new
end
# CREATE: Inserts a new guitar into the database
post '/guitars' do
  query_db "INSERT INTO guitars (brand, model, year, image) VALUES ('#{ params[:brand] }', '#{ params[:model] }', '#{ params[:year] }'),'#{ params[:image] }')"
  redirect to('/guitars')
end

# SHOW: Show all the information about a SINGLE guitar
get '/guitars/:id' do
guitars = query_db "SELECT * FROM guitars WHERE id=#{ params[:id] }" # returns an array
  @guitars = guitars.first # extract the first guitar from the array
  erb :guitars_show
end

# EDIT: Displays a form with existing data for the user to edit a guitar.
get '/guitars/:id/edit' do
  guitars = query_db "SELECT * FROM guitar WHERE id=#{ params[:id] }" # returns an array
  @guitar = guitars.first # extract the first guitar from the array
  erb :guitars_edit
end
# UPDATE: Updates an existing guitars in the database with new information.
post '/guitars/:id' do
  query_db "UPDATE guitars SET brand='#{ params[:brand] }', model='#{ params[:model] }', year='#{ params[:year] }' WHERE id=#{ params[:id] }"
  redirect to("/guitars/#{ params[:id] }")
end

# DELETE: Deletes a guitar from the database.
get '/guitars/:id/delete' do
  query_db "DELETE FROM guitars WHERE id=#{ params[:id] }"
  redirect to("/guitars")
end



#INDEX: show all guitars


def query_db(sql_statement)
  puts sql_statement # Optional but very nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicit return
end
