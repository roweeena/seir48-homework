require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



get '/' do
    erb :home
end

get '/info' do

    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:book_info] }"

    @info = HTTParty.get book_url

    @thumbnail = @info["items"][0]["volumeInfo"]['imageLinks']['thumbnail']
    erb :info

end
