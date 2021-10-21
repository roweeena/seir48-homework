class IndexController < ApplicationController
  def home
    @beers = Beer.all 
    @styles = Style.all
  end
end