require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
 erb :home
end

#SEARCH !!
# get '/agency/' do
#   @houses = query_db "SELECT * FROM houses WHERE id='#{params[:id]}'"
#   @house = @houses.first
#   erb :home
# end

get '/agency' do
  @houses = query_db 'SELECT * FROM houses'
  erb :houses_index
end



#Input into db
get '/agency/input' do
  erb :house_input
end

#INSERT into db ( what to do )
post '/agency' do
  query_db "INSERT INTO houses (name, surname, adress ,image) VALUES ('#{params[:name]}', '#{params[:surname]}', '#{params[:adress]}', '#{params[:image]}')"
  redirect to('/agency')
end

#READ FILE FROM ALL ID'S ( open's every item into db with)
get '/agency/:id' do
  @houses = query_db "SELECT * FROM houses WHERE id=#{params[:id]}"
  @house = @houses.first
  erb :house_dbshow
end


#update form file
get '/agency/:id/update' do
  @houses = query_db "SELECT * FROM houses WHERE id=#{params[:id]}"
  @house = @houses.first
  erb :house_update
end
#Update inside FORM FILE
post '/agency/:id' do
  query_db "UPDATE houses set name='#{params[:name]}', surname='#{params[:surname]}', adress='#{params[:adress]}', image='#{params[:image]}' WHERE id='#{params[:id]}'"
  redirect to("/agency/#{params[:id]}")
end

#delete
get '/agency/:id/delete' do
  query_db "DELETE FROM houses WHERE id=#{ params[:id] }"
  redirect to ("/agency")
end

#Database setuped
def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end


  # @house = @houses.first
