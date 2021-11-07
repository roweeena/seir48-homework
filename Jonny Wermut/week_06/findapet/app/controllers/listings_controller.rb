class ListingsController < ApplicationController

def index
	if @current_user.present? && @current_user.isBreeder?
		@listings = @current_user.listings
	else
		@listings = Listing.all
	end
end

def show
	@listing = Listing.find params[:id]
	@breeder_id = @listing.breeder.id
end

def new
	@listing = Listing.new
	@myBreeders = @current_user.breeders
end

def create
	@listing = Listing.create listing_params
	redirect_to listings_path
end

def edit
	@listing = Listing.find params[:id]
	@myBreeders = @current_user.breeders
end

def update
	listing = Listing.find params[:id]
  listing.update listing_params
  redirect_to listing
end

def destroy
	listing = Listing.find params[:id]
  listing.destroy
  redirect_to listings_path
end

 private
  def listing_params # strong params (see docs)
    params.require(:listing).permit(:image, :animal, :name, :price, :availability, :description, :breeder_id, :breed_id)
  end

end