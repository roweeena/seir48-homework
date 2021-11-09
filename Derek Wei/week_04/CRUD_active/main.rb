require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Duelist < ActiveRecord::Base
  has_many :monsters
end

class Monster < ActiveRecord::Base
  belongs_to :duelist, :optional => true
end

# HOME
get '/' do
  erb :HOME
end

# Duelist CRUD ##############################################

# INDEX
get '/duelists' do
  @duelists = Duelist.all
  erb :duelists_index
end

# NEW
get '/duelists/new' do
  erb :duelists_new
end

# CREATE
post '/duelists' do
  duelist = Duelist.new
  duelist.name = params[:name]
  duelist.age = params[:age]
  duelist.gender = params[:gender]
  duelist.image = params[:image]
  duelist.save

  redirect to "duelists/#{ duelist.id }"
end

# SHOW
get '/duelists/:id' do
  @duelist = Duelist.find params[:id]
  erb :duelists_show
end

# EDIT
get '/duelists/:id/edit' do
  @duelist = Duelist.find params[:id]
  erb :duelists_edit
end

# UPDATE
post '/duelists/:id' do
  duelist = Duelist.find params[:id]
  duelist.name = params[:name]
  duelist.age = params[:age]
  duelist.gender = params[:gender]
  duelist.image = params[:image]
  duelist.save

  redirect to "/duelists/#{ params[:id] }"
end

# DELETE
get '/duelists/:id/delete' do
  duelist = Duelist.find params[:id]
  duelist.destroy

  redirect to "/duelists"
end

# INDEX
get '/monsters' do
  @monsters = Monster.all
  erb :monsters_index
end

# NEW
get '/monsters/new' do
  @duelist = Duelist.all
  erb :monsters_new
end

# CREATE
post '/monsters' do
  monster = Monster.new
  monster.name = params[:name]
  monster.mtype = params[:mtype]
  monster.element = params[:element]
  monster.atk = params[:atk]
  monster.def = params[:def]
  monster.image = params[:image]
  monster.duelist_id = params[:duelist_id]

  monster.save

  redirect to "monsters/#{ monster.id }"
end

# Monster CRUD ##############################################

# SHOW
get '/monsters/:id' do
  @monster = Monster.find params[:id]
  erb :monsters_show
end

# EDIT
get '/monsters/:id/edit' do
  @monster = Monster.find params[:id]
  erb :monsters_edit
end

# UPDATE
post '/monsters/:id' do
  monster = Monster.find params[:id]
  monster.name = params[:name]
  monster.mtype = params[:mtype]
  monster.element = params[:element]
  monster.atk = params[:atk]
  monster.def = params[:def]
  monster.image = params[:image]
  monster.duelist_id = params[:duelist_id]

  monster.save

  redirect to "/monsters/#{ params[:id] }"
end

# DELETE
get '/monsters/:id/delete' do
  monster = Monster.find params[:id]
  monster.destroy

  redirect to "/monsters"
end

after do
  ActiveRecord::Base.connection.close
end
