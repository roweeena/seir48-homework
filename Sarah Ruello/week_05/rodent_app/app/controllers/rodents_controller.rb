class RodentsController < ApplicationController

    def index
        @rodents = Rodent.all
    end        

    def show 
        @rodent = Rodent.find params[:id]
    end    

    def new         
    end    

    def create 
        rodent = Rodent.create :name => params[:name], :family => params[:family], :lifespan => params[:lifespan], :diet => params[:diet], :image => params[:image]
        redirect_to rodent_path(rodent.id) # show page /rodents/23
    end  

    def edit 
        @rodent = Rodent.find params[:id]
    end    

    def update
        rodent = Rodent.find params[:id]
        rodent.name = params[:name]
        rodent.family = params[:family]
        rodent.lifespan = params[:lifespan]
        rodent.diet = params[:diet]
        rodent.image = params[:image]
        rodent.save
        redirect_to rodent_path(rodent.id)
    end

    def destroy 
        rodent = Rodent.find params[:id]
        rodent.destroy
        redirect_to rodents_path
    end   
end    