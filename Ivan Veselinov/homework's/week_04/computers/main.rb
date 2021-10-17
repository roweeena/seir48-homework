require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Motherboards < ActiveRecord::Base
end

class Components < ActiveRecord::Base
end

#index Local host first page ----> STEP --- 1
get '/' do
  erb :home
end

#Cats Home Page ( READ ALL INFO FROM DATABASE) --- STEP : 2
get '/motherboards' do
@motherboards = Motherboards.all
erb :mb_home
end

#CREATE --- TO INPUT STEP 4
post '/motherboards' do
  mb = Motherboards.new
  mb.name = params[:name]
  mb.model = params[:model]
  mb.socket = params[:socket]
  mb.image = params[:image]
  mb.video = params[:video]

  mb.save

  redirect to("/motherboards/#{ mb.id }")
end

#SHOW FORM ----  STEP : 4
get '/motherboards/create' do
  erb :mb_create
end

#SHOW PER ID ----- STEP : 3
get '/motherboards/:id' do
@motherboards = Motherboards.find params[:id]
erb :mb_view
end


#edit STEP  ---- 6 edit!!
get '/motherboards/:id/edit' do
  @mb = Motherboards.find params[:id]
  erb :mb_edit
end

#update  STEP 7
post '/motherboards/:id' do
  mb = Motherboards.find params[:id]
  mb.name = params[:name]
  mb.model = params[:model]
  mb.socket = params[:socket]
  mb.image = params[:image]
  mb.video = params[:video]

  mb.save

  redirect to("/motherboards/#{ mb.id }")
end


#delete
get '/motherboards/:id/delete' do
  mb = Motherboards.find params[:id]
  mb.destroy
  redirect to('/motherboards')
  end

##################################################################

#Home Page STEP READ FROM DB---- 2
get '/components' do
  @components = Components.all
  erb :cp_home
end

#update
get '/components/create' do
  erb :cp_create
end

#INSERT INTO DP STEP -4
post '/components' do
  cp = Components.new
  cp.cpu = params[:cpu]
  cp.ram = params[:ram]
  cp.gpu = params[:gpu]
  cp.ssd = params[:ssd]
  cp.hdd = params[:hdd]
  cp.powersupply = params[:powersupply]
  cp.wifi = params[:wifi]
  cp.cooler = params[:cooler]
  cp.blueray = params[:blueray]
  cp.save

  redirect to("/components/#{cp.id}")
end

#STEP 3 READ FROM DP AND PUT INTO HOMEPAGE
get '/components/:id' do
  @cp = Components.find params[:id]
  erb :cp_view
end

#update EDIT!!!
get '/components/:id/edit' do
  @cp = Components.find params[:id]
erb :cp_edit
end

#edit forms add
post '/components/:id' do
  cp= Components.find params[:id]
  cp.cpu = params[:cpu]
  cp.ram = params[:ram]
  cp.gpu = params[:gpu]
  cp.ssd = params[:ssd]
  cp.hdd = params[:hdd]
  cp.powersupply = params[:powersupply]
  cp.wifi = params[:wifi]
  cp.cooler = params[:cooler]
  cp.blueray = params[:blueray]

  cp.save

  redirect to("/components/#{ cp.id }")
end

#DELETE
get '/components/:id/delete' do
  cp = Components.find params[:id]
  cp.destroy
  redirect to('/components')
end

after do
ActiveRecord::Base.connection.close
end
