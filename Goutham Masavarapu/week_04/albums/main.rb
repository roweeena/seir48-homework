require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
  erb :home
end


get '/albums' do
	 @albums = query_db "SELECT * FROM albums"

	erb :albums_index
end


get '/albums/:id' do
	@albums = query_db "SELECT * FROM albums WHERE id=#{params['id']}"
	@albums = @albums.first
	erb :albums_show
end



# database function
def query_db(sql)
	db = SQLite3::Database.new 'database.sqlite3'
	db.results_as_hash = true
	results = db.execute sql
	db.close
	results
end
