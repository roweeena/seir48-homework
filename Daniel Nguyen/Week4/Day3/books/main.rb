require "sinatra"
require "sinatra/reloader"
require 'httparty'
require "pry"

get '/' do
  erb :home
end

get '/search' do
  response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:query] }")
  @thumbnail_url = response["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :book
end
