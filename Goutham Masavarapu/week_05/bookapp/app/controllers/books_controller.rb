class BooksController < ApplicationController

def index
@books = Book.all
end

def show
    @book = Book.find params['id']
  end

  def new
      @book = Book.new
    end

  def create
      book = Book.create
      redirect_to book
    end

    def edit
      @book = Book.find params['id']
      
    end

    def update
      book = Book.find_by(id: params["id"])
      book.update  book_params()
      redirect_to book_path(book)
    end

    def destroy
      book = Book.find_by(id: params["id"])
      book.destroy
      redirect_to books_path()
    end

    private

    def book_params
      params.require(:book).permit(:title, :published, :genre, :language, :image, :artist_id)
    end
  end
