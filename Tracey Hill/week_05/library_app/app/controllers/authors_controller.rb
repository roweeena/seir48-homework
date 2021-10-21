class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end

  def show
    @author = Author.find params[:id]
  end

  def new
    @author = Author.new
  end

  def create
    author = Author.create author_params
    redirect_to author # show page
  end

  def destroy
    author = Author.find params[:id]
    author.destroy
    redirect_to authors_path
  end

  def edit
    @author = Author.find params[:id]
  end

  def update
    author = Author.find params[:id]
    author.update author_params
    redirect_to author
  end

  private
  def author_params 
    params.require(:author).permit(:name, :born, :dob, :website, :genre, :image)
  end
end
