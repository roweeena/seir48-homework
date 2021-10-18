require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'


ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Games < ActiveRecord::Base
end

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database2.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class GameStudios < ActiveRecord::Base
end

get '/' do
    erb :home
end

get '/games' do
    @games = Games.all
    erb :games
end

get 'game-studios' do
    @gameStudios = GameStudios.all
    erb :gameStudios
end

