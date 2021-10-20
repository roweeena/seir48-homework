require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



get '/' do
  erb :home
end

get '/info' do

  @info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book_name]}")
  @thumb = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :info
end
