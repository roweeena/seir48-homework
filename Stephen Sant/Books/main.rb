require 'httparty'
require 'sinatra'
book_title = "Jurassic Park"
book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{book_title}"
@info = HTTParty.get book_url
@book_cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
puts @book_cover
    
get '/' do
    erb :home
end

get '/result' do
    erb :
end