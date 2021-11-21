require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    "This is home page"
  erb :home
end


get '/books' do
  @book = params[:books_insert]
  @info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{@book}")
  @title = @info["items"][0]["volumeInfo"]["title"]
  @cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @desc = @info["items"][1]["volumeInfo"]["description"]
  @authors = @info["items"][1]["volumeInfo"]["authors"]
  @publish = @info["items"][1]["volumeInfo"]["publishedDate"]
  erb :books
end
