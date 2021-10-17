require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'mydatabase.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class backed by a database table
class Team < ActiveRecord::Base
	has_many :players
end

class Player <ActiveRecord::Base
	belongs_to :teams
end 

get '/' do
	@teams = Team.all
	@teams
	erb :home 
end

get '/players' do
	@players = Player.all
	@players
	erb :allPlayers 
end

get '/players/add' do
	erb :addPlayer
end

post '/players/add' do
	player = Player.new
	player.name = params[:name]
	player.team_id = params[:teamId]
	player.goals = params[:goals]
	player.assists = params[:assists]
	player.goalVideo = params[:bestGoal]

	player.save
	redirect to ('/players')

	erb :addPlayer
end

get '/players/edit/:id' do
	@player = Player.find params[:id]
	erb :editPlayer
end

post '/players/edit/:id' do
	player = Player.find params[:id]
	player.name = params[:name]
	player.team_id = params[:teamId]
	player.position = params[:position]
	player.goals = params[:goals]
	player.assists = params[:assists]
	player.goalVideo = params[:bestGoal]

	player.save

	redirect to ("/players/#{params[:id]}")
	erb :editPlayer
end

get '/players/delete/:id' do
	Player.destroy params[:id]
	redirect to ('/players')
	erb :playerDetails
end


get '/players/:id' do
	@player = Player.find params[:id]
	@player
	erb :playerDetails 
end

post '/' do
	team = Team.new
	team.id = params[:id]
	team.name = params[:name]
	team.manager = params[:manager]
	team.city = params[:city]
	team.logo = params[:logo]

	team.save
	redirect to ('/')
	erb :addTeam
end

get '/teams/add' do
	erb :addTeam
end

get '/teams/edit/:id' do
	@info = Team.find params[:id]
	erb :editTeam
end

get '/teams/delete/:id' do
	Team.destroy params[:id]
	redirect to ("/")
	erb :team
end

post '/teams/edit/:id' do
	team = Team.find params[:id]
	team.name = params[:name]
	team.manager = params[:manager]
	team.city = params[:city]
	team.logo = params[:logo]

	team.save

	redirect to ("/teams/#{params[:id]}")
	erb :editTeam
end

get '/teams/:id' do
	@team = Team.find params[:id]
	erb :team 
end

def query(sql)
	db = SQLite3::Database.new("mydatabase.sqlite3")
	db.results_as_hash = true
	results = db.execute(sql)
	db.close
	results 
end