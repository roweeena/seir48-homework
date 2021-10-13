require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"


get '/' do
    
    erb :book
end
get '/book_display' do
    response =
  HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book_title]}")
    book_info = response["items"][0]["volumeInfo"]
    @book_image = book_info["imageLinks"]["thumbnail"]
    # binding.pry
    erb :book_display
end
