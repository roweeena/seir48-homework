require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/whiskies' do
  @all_whiskies = query_db 'SELECT * FROM whiskies'
  @whiskies = @all_whiskies[0]

  erb :whiskies_index
end

post '/whiskies' do
  query_db "INSERT INTO whiskies (distillery, name, location, abv, image) VALUES ('#{params['distillery']}', '#{params['name']}', '#{params['location']}', '#{params['abv']}', '#{params['image']}')"

  redirect to('/whiskies')
end

get '/whiskies/new' do
  erb :whiskies_new
end

get '/whiskies/:id' do

  whisky = query_db "SELECT * FROM whiskies WHERE id=#{ params[:id] }"
  @whisky = whisky.first

  erb :whiskies_show
end

post '/whiskies/:id' do
  query_db "UPDATE whiskies SET distillery='#{params['distillery']}', name='#{params['name']}', location='#{params['location']}', abv='#{params['abv']}', image='#{params['image']}' WHERE id=#{params[:id]}"
  redirect to ("whiskies/#{params[:id]}")
end

get '/whiskies/:id/edit' do
  whiskies = query_db "SELECT * FROM whiskies WHERE id=#{ params[:id] }"
  @whisky = whiskies.first
  erb :whiskies_edit
end

get '/whiskies/:id/delete' do
  query_db "DELETE FROM whiskies WHERE id=#{params[:id]}"
  redirect to('/whiskies')
end

# Function for querying the DB
def query_db sql_string

  puts sql_string
  db = SQLite3::Database.new('database.sqlite3')
  db.results_as_hash = true
  results = db.execute sql_string
  db.close
  results

end
