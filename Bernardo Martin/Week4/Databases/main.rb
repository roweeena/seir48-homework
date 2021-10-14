require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# READ LIST
get '/countries' do
  @countries = query_db "SELECT * FROM countries"
  erb :countries_index
end

# NEW COUNTRY

get '/countries/new' do
  erb :countries_new
end

post '/countries' do
  query_db "INSERT INTO countries (name, population, language, flag) VALUES ('#{params[:name]}', '#{params[:population]}', '#{params[:language]}', '#{params[:flag]}')"
  redirect to ("/countries")
end


# READ EACH COUNTRY
get '/countries/:id' do
  countries = query_db "SELECT * FROM countries WHERE id=#{params[:id]}"
  @country = countries.first
  erb :country_info
end

# EDIT Country
get '/countries/:id/edit' do
  countries = query_db "SELECT * FROM countries WHERE id=#{params[:id]}"
  @country = countries.first
  erb :countries_edit

end

post '/countries/:id' do
  query_db "UPDATE countries SET name='#{params[:name]}', population='#{params[:population]}', language='#{params[:language]}', flag='#{params[:flag]}'WHERE id=#{params[:id]}"
  redirect to ("countries/#{params[:id]}")
end

# Delete

get '/countries/:id/delete' do
  query_db "DELETE FROM countries WHERE id=#{params[:id]}"
  redirect to ("/countries")
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
