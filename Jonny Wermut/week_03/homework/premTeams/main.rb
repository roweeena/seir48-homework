require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
	@teams = query "SELECT * FROM teams"
	@teams
	erb :home 
end

post '/' do
	query "INSERT INTO teams (id, name, manager, city, logo) VALUES ('#{params[:id]}', '#{params[:name]}', '#{params[:manager]}', '#{params[:city]}', '#{params[:logo]}')"
	redirect to ('/')
	erb :addTeam
end

get '/teams/add' do
	erb :addTeam
end

get '/teams/edit/:id' do
	@info = query "SELECT * FROM teams WHERE id=#{params[:id]}"
	@info = @info.first
	erb :editTeam
end

get '/teams/delete/:id' do
	query "DELETE FROM teams WHERE id = #{params[:id]}"
	redirect to ("/")
	erb :team
end

post '/teams/edit/:id' do
	query "UPDATE teams SET name = '#{params[:name]}', manager = '#{params[:manager]}', city = '#{params[:city]}', logo = '#{params[:logo]}' WHERE id = #{params[:id]}"
	redirect to ("/teams/#{params[:id]}")
	erb :editTeam
end

get '/teams/:id' do
	@team = query "SELECT * FROM teams WHERE id=#{params[:id]}"
	@team = @team.first
	erb :team 
end

def query(sql)
	db = SQLite3::Database.new("mydatabase.sqlite3")
	db.results_as_hash = true
	results = db.execute(sql)
	db.close
	results 
end