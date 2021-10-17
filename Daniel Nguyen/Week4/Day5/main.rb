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

class Artist < ActiveRecord::Base
end

class Song < ActiveRecord::Base
end

# ==============================================================================

get '/' do
  erb :home
end

# ARTISTS: =====================================================================

# INDEX

# NEW

# CREATE

# SHOW

# EDIT

# UPDATE

# DELETE

# SONGS: =======================================================================

# INDEX

# NEW

# CREATE

# SHOW

# EDIT

# UPDATE

# DELETE

after do
  ActiveRecord::Base.connection.close
end
