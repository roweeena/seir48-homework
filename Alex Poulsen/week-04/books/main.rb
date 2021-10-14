require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.
#
# ## Sample HTTParty URL
#
# https://www.googleapis.com/books/v1/volumes?q=title:Ulysses
#
# ### Additional Resources
#
# - [Sinatra](http://sinatrarb.com)
# - [Google Books Search API](https://developers.google.com/books/docs/v1/reference/volumes/list)
# - [HTTParty Tutorial](http://blog.teamtreehouse.com/its-time-to-httparty)

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
