require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/second' do
  erb :second
end
get '/third' do
  erb :third
end
get '/fourth' do
  erb :fourth
end
get '/fifth' do
  erb :fifth
end
get '/sixth' do
  erb :sixth
end
get '/seventh' do
  erb :seventh
end
get '/first' do
  erb :home
end
