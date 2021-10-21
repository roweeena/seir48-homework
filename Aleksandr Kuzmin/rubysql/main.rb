require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'


ActiveRecord::Base.establish_connection(

  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# ActiveRecord::Base.logger = Logger.new(STDERR)
# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)


class Place < ActiveRecord::Base
end

class Thing < ActiveRecord::Base
end

class Thing <ApplicationRecord

  belongs_to :places
end

get '/' do
  erb :home
end




#index ########
get "/places" do
  @places = Place.all
  erb :places_index
end


#NEW ########
get "/places/new" do
  erb :places_new

end

#Create####
post "/places" do
  place = Place.new
  place.name = params[:name]
  place.description = params[:description]
  place.image = params[:image]

  place.save
  redirect to("/places/#{place.id}")

end
#SHOW!!!!!
get "/places/:id" do
  @place =Place.find params[:id]
  erb :places_show
end


#EDIT!!!
get "/places/:id/edit" do
  @place = Place.find params[:id]
  erb :places_edit
end

#update!!!


post "/places/:id" do
  place = Place.new
  place.name = params[:name]
  place.description = params[:description]
  place.image = params[:image]

  place.save
  redirect to("/places/#{place.id}")

end

#delete

get "/places/:id/delete" do
  place = Place.find params[:id]
  place.destroy
  redirect to('/places')
end


#index ########
get "/things" do
  @things = Thing.all
  erb :things_index
end


#NEW ########
get "/things/new" do
  erb :things_new

end

#Create####
post "/things" do
  thing = Thing.new
  thing.name = params[:name]
  thing.description = params[:description]
  thing.image = params[:image]

  thing.save
  redirect to("/things/#{thing.id}")

end
#SHOW!!!!!
get "/things/:id" do
  @thing =Thing.find params[:id]
  erb :things_show
end


#EDIT!!!
get "/things/:id/edit" do
  @thing = Thing.find params[:id]
  erb :things_edit
end

#update!!!


post "/things/:id" do
  thing = Thing.new
  thing.name = params[:name]
  thing.description = params[:description]
  thing.image = params[:image]

  thing.save
  redirect to("/things/#{thing.id}")

end

#delete

get "/things/:id/delete" do
  thing = Thing.find params[:id]
  thing.destroy
  redirect to('/things')
end














after do
  ActiveRecord::Base.connection.close
end
