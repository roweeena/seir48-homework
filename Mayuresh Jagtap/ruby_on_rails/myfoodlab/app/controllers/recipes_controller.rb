class RecipesController < ApplicationController
  def new
  end

  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.find params[:id]
  end
end
