class AuthorsController < ApplicationController
  # INDEX
  def index
    @authors = Author.all
  end
  # SHOW
  def show
    @author = Author.find params[:id]
  end
  # EDIT
  def new
    @author = Author.new
  end
  # CREATE
  def create
    author = Author.create author_params
    redirect_to author
  end
  # Edit
  def edit
    @author = Author.find params[:id]
  end
  # Update
  def update
    author = Author.find params[:id]
    author.update author_params
    redirect_to author
  end
  # DESTROY
  def destroy
    author = Author.find params[:id]
    author.destroy
    redirect_to authors_path
  end

  private
  def author_params
    params.require(:author).permit(:name, :nationality, :num_of_books, :image)
  end
end
