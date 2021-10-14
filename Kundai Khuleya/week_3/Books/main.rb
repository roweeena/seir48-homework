require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/result' do

book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book_title]}"
@info = HTTParty.get book_url

  @book_img = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title = @info["items"][0]["volumeInfo"]["title"]
  @author = @info["items"][0]["volumeInfo"]['authors'][0]
  @desc = @info['items'][0]['volumeInfo']['description']


 erb :result

end
