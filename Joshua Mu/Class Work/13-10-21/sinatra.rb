require 'sinatra'
require 'sinatra/reloader'

get '/' do 
    "Hello World"
end

get "/hello" do
    "Hello Work From Sinatra"
end

get "/goodbye" do
    "This static text just says goodbye cruel world"
end

#Dynamic Content
get '/lucky_number' do
    "Here is your lucky number #{ rand 1..40}"
end

get '/uptime' do
    "The server uptime is #{'uptime'}"
end
