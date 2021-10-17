require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"

get "/" do
    erb :home
end
get '/cities' do
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    @all_cities = db.execute "SELECT * FROM cities;"
    db.close
    erb :cities
end

get '/cities/new' do
    
    erb :cities_new
end
post '/cities' do
    query_db "INSERT INTO cities (name, country, image) VALUES('#{params[:name]}', '#{params[:country]}', '#{params[:image]}')"
    redirect to ('/cities')
end

get '/cities/:id/edit'do
    cities = query_db "SELECT * FROM cities WHERE id=#{params[:id]}"
    @city = cities.first
    erb :cities_edit
end
post '/cities/:id' do
    query_db "UPDATE cities SET name='#{params[:name]}', country='#{params[:country]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    redirect to("/cities")
  end
  get '/cities/:id/delete' do
      cities = query_db "DELETE FROM cities WHERE id=#{params[:id]}"
      redirect to("/cities")
  end

get '/cities/:id' do
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    all_cities = db.execute "SELECT * FROM cities WHERE id=#{params[:id]};"
    @city = all_cities.first
    erb :cities_show
  end



  def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # implicit return
  end