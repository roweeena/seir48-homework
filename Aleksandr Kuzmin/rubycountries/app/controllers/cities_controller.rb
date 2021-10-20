class CitiesController < ApplicationController

def index
  @cities =City.all
end

def show
  @city = City.find params[:id]
end

def new
@city = City.new
end

def create
city= City.find city_params
  redirect_to city
end







private
def city_params
  params.require(:city).permit(:name,:formation,:image,:country_id)
end

end
