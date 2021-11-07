class BreedersController < ApplicationController

def index
	@breeders = Breeder.all
end

def show
	@breeder = Breeder.find params[:id]
end

def new
	@breeder = Breeder.new
end

def create
	@breeder = Breeder.create breeder_params
	redirect_to breeders_path
end

def edit
	@breeder = Breeder.find params[:id]
end

def update
	breeder = Breeder.find params[:id]
	breeder.update breeder_params
	redirect_to breeder_path
end

def destroy
	breeder = Breeder.find params[:id]
	breeder.destroy
	redirect_to breeders_path
end

private
def breeder_params
   params.require(:breeder).permit(:name, :location, :about, :image, :phone, :email, :breedType)
end

end