require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"


# wait for ruby to do this next week
ActiveRecord::Base.establish_connection(
:adapter => 'sqlite3',
:database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Book < ActiveRecord::Base
end

class Library < ActiveRecord::Base
  # inherits from ActiveRecord
end
# Model is a class that has db behind it






#HOME-------->gives us home page
get '/' do
  erb :home
end


#AUTHORS
get '/books/authors/:author' do
  @books = Book.where :author =>[:author]
  erb :books_index
end

# These are routes from the home page ----> always 7 routes involved in the CRUD APP
#Index
get '/books' do
  @books = Book.all
  erb :books_index
end
#NEW
get '/books/new' do
  erb :books_new
end


#CREATE
post '/books' do
  book = Book.new
  book.title = params[:title]
  book.author = params[:author]
  book.cover = params[:cover]
  book.description = params[:description]
  book.save
  redirect to("/books/#{book[:id]}")
end

#show
get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

#EDIT
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end


#UPDATE
post '/books/:id' do
  book = Book.find params[:id]
  book.title = params[:title]
  book.author = params[:author]
  book.cover = params[:cover]
  book.description = params[:description]
  book.save
  redirect to("/books/#{ params[:id] }")
end

#DESTROY
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books')
end




#INDEX
get '/libraries' do
  @libraries = Library.all
  erb :libraries_index
end

#NEW
get '/libraries/new' do
  erb :libraries_new
end

#CREATE
post '/libraries' do
  library = Library.new
  library.name = params[:name]
  library.location = params[:location]
  library.books_available = params[:books_available]
  library.save
  redirect to("/libraries/#{ library.id }")
end

#SHOW
get '/libraries/:id' do
  @library = Library.find params[:id]
  erb :libraries_show
end

#EDIT
get '/libraries/:id/edit' do
  @library = Library.find params[:id]
  erb :libraries_edit
end

#UPDATE
post '/libraries/:id' do
  library = Library.find params[:id]
  library.name = params[:name]
  library.location = params[:location]
  library.books_available = params[:books_available]
  library.save
  redirect to("/libraries/#{ library.id }")
end

#DESTORY
get '/libraries/:id/delete' do
  library = Library.find params[:id]
  library.destroy
  redirect to("/libraries")
end

after do
  ActiveRecord::Base.connection.close
end
