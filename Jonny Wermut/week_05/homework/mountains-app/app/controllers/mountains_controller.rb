class MountainsController < ApplicationController

def home
	@mountains = Mountain.all
end

def details
	@mountain = Mountain.find params[:id]	
end

def add
end

def new
	Mountain.create :name => params[:name], :height => params[:height], :firstClimbedOn => params[:climbedOn], :firstClimbedBy => params[:climbedBy], :image => params[:image]
	redirect_to home_path
end

def edit
	@mountain = Mountain.find params[:id]
end

def saveEdit
	mountain = Mountain.find params[:id]
	mountain.name = params[:name]
	mountain.height = params[:height]
	mountain.firstClimbedOn = params[:climbedOn]
	mountain.firstClimbedBy = params[:climbedBy]
	mountain.image = params[:image]
	mountain.save

	redirect_to mountain_details_path(mountain.id)
end

def destroy
	mountain = Mountain.find params[:id]
	mountain.destroy
	redirect_to home_path
end

end