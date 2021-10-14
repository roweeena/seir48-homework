require "sinatra"
require "sinatra/reloader"

require "pry"
require "httparty"

get "/" do
  erb :home
end

get "/result" do
  book_title = params[:book].capitalize

  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title }"

  @info = HTTParty.get book_url;

  @image_url = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  @book_authors = @info["items"][0]["volumeInfo"]["authors"].join(" ")

  @book_description = @info["items"][0]["volumeInfo"]["description"]

  erb :result
end
