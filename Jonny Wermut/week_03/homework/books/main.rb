require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  "Welcome to the homescreen"
  erb :home 
end

get '/title' do
  @title = params[:book]
  @details = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{@title}")
  @src = @details["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @about = @details["items"][0]["volumeInfo"]["description"]
  @author = @details["items"][0]["volumeInfo"]["authors"][0]
  erb :title
end