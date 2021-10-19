require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Whisky < ActiveRecord::Base
end

class Distillery < ActiveRecord::Base
end

get '/' do
  erb :home
end

get '/whiskies' do
  @whiskies = Whisky.all
  erb :whiskies_index
end

get '/whiskies/new' do
  erb :whiskies_new
end

post '/whiskies' do
  whisky = Whisky.new
  whisky.distillery = params[:distillery]
  whisky.name = params[:name]
  whisky.abv = params[:abv]
  whisky.image = params[:image]
  whisky.save

  redirect to("whiskies/#{ whisky.id }")
end

get '/whiskies/:id/edit' do

  @whisky = Whisky.find params[:id]

  erb :whiskies_edit
end

post '/whiskies/:id' do

  whisky = Whisky.find( params[:id] )
  whisky.distillery = params[:distillery]
  whisky.name = params[:name]
  whisky.abv = params[:abv]
  whisky.image = params[:image]
  whisky.save

  redirect to("whiskies/#{params[:id]}")
end

get '/whiskies/:id' do
  @whisky = Whisky.find params[:id]
  erb :whiskies_show
end

get '/whiskies/:id/delete' do
  whisky = Whisky.find params[:id]
  whisky.destroy

  redirect to('/whiskies')
end

# Distilleries CRUD ####################################################

get '/distilleries' do
  @distilleries = Distillery.all
  erb :distilleries_index
end

get '/distilleries/new' do
  erb :distilleries_new
end

post '/distilleries' do
  distillery = Distillery.new
  distillery.name = params[:name]
  distillery.location = params[:location]
  distillery.logo = params[:logo]
  distillery.save

  redirect to("/distilleries/#{ distillery.id }")
end

get '/distilleries/:id' do

  @distillery = Distillery.find params[:id]
  erb :distilleries_show
end

get '/distilleries/:id/edit' do
  @distillery = Distillery.find params[:id]

  erb :distillery_edit
end

post '/distilleries/:id' do

  distillery = Distillery.find( params[:id] )

  distillery.name = params[:name]
  distillery.location = params[:location]
  distillery.logo = params[:logo]
  distillery.save

  redirect to("distilleries/#{params[:id]}")
end

get '/distilleries/:id/delete' do
  distillery = Distillery.find params[:id]
  distillery.destroy

  redirect to('/distilleries')
end

after do
  ActiveRecord::Base.connection.close
end
