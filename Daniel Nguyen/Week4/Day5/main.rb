require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# ActiveRecord Initialisation: =================================================

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)

# MODELS: ======================================================================

class User < ActiveRecord::Base
end

class Team < ActiveRecord::Base
end

# ==============================================================================

get '/' do
  erb :home
end

# USERS: =======================================================================

# INDEX
get '/users' do
  @users = User.all
  erb :users_index
end

# NEW

# CREATE

# SHOW
get '/users/:id' do
  @user = User.find params[:id]
  erb :users_detail
end

# EDIT

# UPDATE

# DELETE

# TEAMS: =======================================================================

# INDEX

# NEW

# CREATE

# SHOW

# EDIT

# UPDATE

# DELETE
