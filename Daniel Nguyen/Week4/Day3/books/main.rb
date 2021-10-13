require "sinatra"
require "sinatra/reloader"
require 'httparty'
require "pry"

get '/' do
  erb :home
end

get '/search' do
  response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:query] }")
  book_info = response["items"][0]["volumeInfo"]

  @title = book_info["title"]
  @subtitle = book_info["subtitle"]
  @authors = book_info["authors"].join(', ')
  @description = book_info["description"]
  @thumbnail_url = book_info["imageLinks"]["thumbnail"]

  # binding.pry
  erb :book
end
