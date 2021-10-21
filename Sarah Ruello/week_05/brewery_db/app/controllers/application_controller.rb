class ApplicationController < ActionController::Base
  def index
    @beers = Beer.all 
    @styles = Style.all
  end
end
