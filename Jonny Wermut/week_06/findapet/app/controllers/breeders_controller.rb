class BreedersController < ApplicationController

def index
	if @current_user.present? && @current_user.isBreeder?
		@breeders = @current_user.breeders
	else
		@breeders = Breeder.all
	end
end

def show
	@breeder = Breeder.find params[:id]
end

def new
	@breeder = Breeder.new
end

def create
	@breeder = @current_user.breeders.create breeder_params
	redirect_to breeders_path
end

def edit
	@breeder = Breeder.find params[:id]
end

def update
	breeder = Breeder.find params[:id]
    breeder.update breeder_params
    redirect_to breeder
end

def destroy
	breeder = Breeder.find params[:id]
    breeder.destroy
    redirect_to breeders_path
end

 private
  def breeder_params # strong params (see docs)
    params.require(:breeder).permit(:name, :city, :state, :photo)
  end

end