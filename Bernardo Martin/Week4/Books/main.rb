require "sinatra"
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :home
end

get '/book_search' do
  title = params[:book]
  title_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
  @info = HTTParty.get title_url
  @thumbnail = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :result
end
