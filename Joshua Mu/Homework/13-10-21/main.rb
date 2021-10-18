require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/book-info' do
    book = params[:desired_book]
    libraryURL = 'https://www.googleapis.com/books/v1/volumes?q=title:Ulysses'
    @info = httparty.get libraryURL
    i = 0

    until i > libraryArray.length() do
        if libraryArray[i][title] == book
            return @result = @info["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"]
        end
        i++
    end
    erb :bookInfo
end