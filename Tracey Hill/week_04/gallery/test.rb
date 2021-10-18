require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

# Next week rails will do this automatically
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class backed by a database table
class plant < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX: Show all plants
get '/plants' do
  #db = SQLite3::Database.new 'database.sqlite3'
  #db.results_as_hash = true
  @plants = plant.all
  #db.close
  erb :plants_index
end

# NEW: Shows a form for new plant data
get '/plants/new' do
    erb :plants_new
end

# CREATE inserts a new plant into the database
post '/plants' do
    #query_db "INSERT INTO plants (name, image) VALUES ('#{ params[:name] }', '#{ params[:image] }')"
    plant = plant.new
    plant.name = params[:name]
    plant.image = params[:image]

    plant.save

    redirect to("/plants/#{ plant.id }")
end

# SHOW: Show all the information about a SINGLE plant
# dynamic URL

get '/plants/:id' do
    @plant = plant.find params[:id]
    erb :plants_show
end

# EDIT displays a form with existing data for the user to edit
get '/plants/:id/edit' do
    @plant = plant.find params[:id]
    erb :plants_edit
end

# UPDATES an existing plant with new info
post '/plants/:id' do
    plant = plant.find params[:id]
    plant.name = params[:name]
    plant.image = params[:image]

    plant.save

    redirect to("/plants/#{ params['id'] }")
end

#DELETE Deletes a plant from the database
get '/plants/:id/delete' do
    plant = plant.find params[:id]
    plant.destroy
    redirect to("/plants")
end