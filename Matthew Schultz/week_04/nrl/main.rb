require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'SQLite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Team < ActiveRecord::Base
end

class Player < ActiveRecord::Base
end

get '/' do
  erb :home
end

#INDEX
get '/teams' do
  @teams = Team.all
  erb :teams_index
end

#NEW
get '/teams/new' do
  erb :teams_new
end
#CREATE
post '/teams' do
  team = Team.new
  team.location = params[:location]
  team.mascot = params[:mascot]
  team.logo = params[:logo]
  team.save
  redirect to("/teams/#{ team.id }")
end


#SHOW
get '/teams/:id' do
  @team = Team.find params[:id]
  erb :teams_show
end

#EDIT
get '/teams/:id/edit' do
  @team = Team.find params[:id]
  erb :teams_edit
end

#UPDATE
post '/teams/:id' do
  team = Team.find params[:id]
  team.location = params[:location]
  team.mascot = params[:mascot]
  team.logo = params[:logo]
  team.save
  redirect to("/teams/#{ team.id }")
end
#DELETE
get '/teams/:id/delete' do
  team = Team.find params[:id]
  team.destroy
  redirect to ('/teams')
end

#////////PLAYERS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

#INDEX
get '/players' do
  @players = Player.all
  erb :players_index
end

#NEW
get '/players/new' do
  erb :players_new
end
#CREATE
post '/players' do
  player = Player.new
  player.name = params[:name]
  player.team = params[:team]
  player.dob = params[:dob]
  player.save
  redirect to("/players/#{ player.id }")
end


#SHOW
get '/players/:id' do
  @player = Player.find params[:id]
  erb :players_show
end

#EDIT
get '/players/:id/edit' do
  @player = Player.find params[:id]
  erb :players_edit
end

#UPDATE
post '/players/:id' do
  player = Player.find params[:id]
  player.name = params[:name]
  player.team = params[:team]
  player.dob = params[:dob]
  player.save
  redirect to("/players/#{ player.id }")
end
#DELETE
get '/players/:id/delete' do
  player = Player.find params[:id]
  player.destroy
  redirect to ('/players')
end


after do
  ActiveRecord::Base.connection.close
end
