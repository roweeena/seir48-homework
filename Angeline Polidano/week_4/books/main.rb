  require 'sinatra'
  require 'sinatra/reloader'
  require 'httparty'

  get '/'do
  @info = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title }"
    erb :home
  end

  get '/info' do
    puts params[:book_title]
    puts params[:author]
    puts params[:book_cover]

    @cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    # @info = "http://books.google.com/books/content?id=i2x1AQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    erb :info
  end
