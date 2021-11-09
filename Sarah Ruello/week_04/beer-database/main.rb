require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

#ORM - object relational mapper
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
);

# Optional logger:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: class backed by a DB table:

class Style < ActiveRecord::Base
    has_many :beers, dependent: :destroy # destroys all beer children if deleted!
end  

class Beer < ActiveRecord::Base
    belongs_to :style, :optional => false
end    


# start pry from browser if you need it
get '/pry' do 
    require 'pry'
    binding.pry
end    

get '/' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    # @beers = Beer.all
    @styles = Style.all.sort_by {|style| style["name"]}
    erb :home 
end

# INDEX - show all beers:
get '/beers' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    # pass data down to view
    erb :beers_index
end

# NEW - Beer form page:
get '/beers/new' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    erb :beers_new
end    

# CREATE - inserts new Beer into db 
post '/beers' do
    beer = Beer.new 
    beer.name = params[:name]
    beer.brand = params[:brand]
    beer.style_id = params[:style_id] #association
    beer.abv = params[:abv]
    beer.country = params[:country]
    beer.image = params[:image]
    beer.save

    redirect to("/beers/#{ beer.id }")
end

# SHOW - a single Beer:
get '/beers/:id' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    @beer = Beer.find params[:id]  #extract first Beer from array   
    erb :beers_show
end

# EDIT - a single Beer:
get '/beers/:id/edit' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    @beer = Beer.find params[:id] #extract first Beer from array   
    erb :beers_edit
end    

# UPDATE - updates existing Beer:
post '/beers/:id' do
    beer = Beer.find params[:id] 
    beer.name = params[:name]
    beer.brand = params[:brand]
    beer.style_id = params[:style_id]
    beer.abv = params[:abv]
    beer.country = params[:country]
    beer.image = params[:image]
    beer.save
    redirect to("/beers/#{ beer.id }")
end

# DELETE - deletes Beer:
get '/beers/:id/delete' do 
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    beer = Beer.find params[:id] 
    beer.destroy
    redirect to("/beers")
end

##### Styles CRUD ###########################################

#INDEX
get '/styles' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    erb :styles_index
end

#NEW
get '/styles/new' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    erb :styles_new
end   

#CREATE
post '/styles' do
    @styles = Style.all
    style = Style.new 
    style.name = params[:name]
    style.save
    redirect to("/styles/#{ style.id }")
end

#SHOW  
get '/styles/:id' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    @style = Style.find params[:id]    
    erb :styles_show
end

# WHY DO YOU NOT DISPLAY PROPERLY
#EDIT 
get '/styles/:id/edit' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    @style = Style.find params[:id]   
    erb :styles_edit
end    

#UPDATE 
post '/styles/:id' do
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all
    style = Style.find params[:id] 
    style.name = params[:name]
    style.save

    redirect to("/styles/#{ style.id }")
end

# DELETE
get '/styles/:id/delete' do 
    @beers = Beer.all.sort_by {|beer| beer["name"]}
    @styles = Style.all.sort_by {|style| style["name"]}
    style = Style.find params[:id] 
    style.destroy
    redirect to("/styles")
end