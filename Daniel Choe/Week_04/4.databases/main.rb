require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# home page.
get '/' do
  erb :home
end

# selection page.
get '/foods' do
  @foods = query_db "SELECT * FROM foods"
  erb :food_index
end

# create new.
get '/foods/new' do
  erb :food_new
end

post '/foods' do
  query_db "INSERT INTO foods (name, cuisine, image) VALUES ('#{ params[:name] }', '#{ params[:cuisine] }', '#{ params[:image] }')"
  redirect to('/foods')
end

# editing page.
get '/foods/:id/edit' do
  foods = query_db "SELECT * FROM foods WHERE id=#{ params[:id] }"
  @food = foods.first
  erb :food_edit
end

post '/foods/:id' do
  query_db "UPDATE foods SET name='#{ params[:name] }', cuisine='#{ params[:cuisine] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/foods/#{ params[:id] }")
end

# deleting page.
get '/foods/:id/delete' do
  query_db "DELETE FROM foods WHERE id=#{ params[:id] }"
  redirect to('/foods')
end

# individual foods page.
get '/foods/:id' do
  foods = query_db "SELECT * FROM foods WHERE id=#{ params[:id] }"
  @food = foods.first
  erb :food_show
end








def query_db (sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3' #forming a new connection.
  db.results_as_hash = true #we want our results as an array of hashes.
  results = db.execute sql_statement
  db.close
  results #implicit return of the results.
end
