require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

# Need to set up a connection to the database.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Model for cats table.
class Cat < ActiveRecord::Base
end

class Further < ActiveRecord::Base
end



# CATS TABLE SECTION
# Home page.
get '/' do
  erb :home
end

# Cats index page.
get '/cats' do
  @cats = Cat.all
  erb :cats_index
end

# Create cat page.
get '/cats/new' do
  erb :cats_new
end

post '/cats' do
  cat = Cat.new
  cat.breed = params[:breed]
  cat.coat_pattern = params[:coat_pattern]
  cat.image = params[:image]

  cat.save
  redirect to("/cats/#{ cat.id }")
end


# Cats show page.
get '/cats/:id' do
  @cat = Cat.find params[:id]
  erb :cats_show
end


# Cats edit page.
get '/cats/:id/edit' do
  @cat = Cat.find params[:id]
  erb :cats_edit
end

# Cats edit POST.
post '/cats/:id' do
  cat = Cat.find params[:id]
  cat.breed = params[:breed]
  cat.coat_pattern = params[:coat_pattern]
  cat.image = params[:image]

  cat.save

  redirect to("/cats/#{ cat.id }")
end

# Cats delete page.
get '/cats/:id/delete' do
  cat = Cat.find params[:id]
  cat.destroy
  redirect to('/cats')
end


# FURTHER INFORMATION SECTION
# Further: new page.
get '/further_information/new' do
  erb :furthers_new
end

post '/further_information' do
  further = Further.new
  further.breed = params[:breed]
  further.origin = params[:origin]
  further.coat_length = params[:coat_length]

  further.save
  redirect to("/further_information/#{ further.id }")
end

# Further: index page.
get '/further_information' do
  @furthers = Further.all
  erb :furthers_index
end

# Further: show page.
get '/further_information/:id' do
  @further = Further.find params[:id]
  erb :furthers_show
end

# Further: edit page.
get '/further_information/:id/edit' do
  @further = Further.find params[:id]
  erb :furthers_edit
end

# Further: edit POST.
post '/further_information/:id' do
  further = Further.find params[:id]
  further.breed = params[:breed]
  further.origin = params[:origin]
  further.coat_length = params[:coat_length]

  further.save

  redirect to("/further_information/#{ further.id }")
end


# Further: delete page.
get '/further_information/:id/delete' do
  further = Further.find params[:id]
  further.destroy

  redirect to("/further_information")
end

after do
  ActiveRecord::Base.connection.close
end
