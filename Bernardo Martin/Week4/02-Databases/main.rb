require "sinatra"
require "sinatra/reloader"
require "active_record"
require "sqlite3"

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)


class Mountain < ActiveRecord::Base
end

class Climber < ActiveRecord::Base
end



get '/' do
  erb :home
end

# INDEX - Climbers

get '/climbers' do
  @climbers = Climber.all
  erb :climbers_index
end

# ADD - Climbers

get '/climbers/new' do
  erb :climbers_new
end

# CREATE - Climbers

post '/climbers' do
  climber = Climber.new
  climber.name = params[:name]
  climber.surname = params[:surname]
  climber.nationality = params[:nationality]
  climber.save
  redirect to("/climbers/#{climber.id}")
end

# SHOW - Climbers

get '/climbers/:id' do
  @climber = Climber.find params[:id]
  erb :climbers_show
end

# EDIT - Climbers

get '/climbers/:id/edit' do
  @climber = Climber.find params[:id]
  erb :climbers_edit
end

# UPDATE - Climbers

post '/climbers/:id' do
  climber = Climber.find params[:id]
  climber.name = params[:name]
  climber.surname = params[:surname]
  climber.nationality = params[:nationality]
  climber.save
  redirect to("climbers/#{climber.id}")
end

# DELETE - Climbers

get '/climbers/:id/delete' do
  climber = Climber.find params[:id]
  climber.destroy
  redirect to("/climbers")
end

# INDEX - Mountains
get '/mountains' do
  @mountains = Mountain.all
  erb :mountains_index
end

# ADD - Mountains
get '/mountains/new' do
  erb :mountains_new
end

# CREATE - Mountains
post '/mountains' do
  mountain = Mountain.new
  mountain.name = params[:name]
  mountain.location = params[:location]
  mountain.height = params[:height]
  mountain.image = params[:image]
  mountain.save
  redirect to("/mountains")
end

# SHOW - Mountains

get '/mountains/:id' do
  @mountain = Mountain.find params[:id]
  erb :mountains_show
end

# EDIT - Mountains
get '/mountains/:id/edit' do
  @mountain = Mountain.find params[:id]
  erb :mountains_edit
end

# UPDATE - Mountains
post '/mountains/:id' do
  mountain = Mountain.find params[:id]
  mountain.name = params[:name]
  mountain.location = params[:location]
  mountain.height = params[:height]
  mountain.image = params[:image]
  mountain.save
  redirect to("/mountains/#{mountain.id}")
end

# DELETE - Mountains
get '/mountains/:id/delete' do
  mountain = Mountain.find params[:id]
  mountain.destroy
  redirect to("/mountains")
end

after do
  ActiveRecord::Base.connection.close
end
