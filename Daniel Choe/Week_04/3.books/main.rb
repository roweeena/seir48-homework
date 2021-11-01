# This is the server written in Ruby.

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# require 'pry'

get '/' do
  erb :home
end

get '/result' do

  book_title = params[:book_title]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title }"
  @info = HTTParty.get book_url
  @thumbnail = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title = @info["items"][0]["volumeInfo"]["title"]
  @author = @info["items"][0]["volumeInfo"]["authors"].join
  # binding.pry

  erb :result
end
