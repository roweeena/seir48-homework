require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

# Next week: Rails will do this for you automatically:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class backed by a database table
class Butterfly < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX: Show all butterflies
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# NEW: Shows a form for new butterfly data
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE: Inserts a new butterfly into the database
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]

  butterfly.save

  redirect to("/butterflies/#{ butterfly.id }")
end

# SHOW: Show all the information about a SINGLE butterfly
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

# EDIT: Displays a form with existing data for the user to edit a butterfly.
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# UPDATE: Updates an existing butterfly in the database with new information.
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]

  butterfly.save

  redirect to("/butterflies/#{ params[:id] }")
end

# DELETE: Deletes a butterfly from the database.
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to("/butterflies")
end