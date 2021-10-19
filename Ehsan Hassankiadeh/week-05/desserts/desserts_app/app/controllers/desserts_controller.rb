class DessertsController < ApplicationController
    def index
        @desserts = Dessert.all
    end
    def show
        @dessert = Dessert.find params[:id]
    end
    def new
    end
    def create
        dessert = Dessert.create :name=>  params[:name], :image => params[:image], :country => params[:country], :area => params[:area], :discover => params[:discover]
        redirect_to dessert_path(dessert.id)
    end
    def edit
        @dessert = Dessert.find params[:id]
    end
    def update
        dessert = Dessert.find params[:id]
        dessert.name = params[:name]
        dessert.image = params[:image]
        dessert.country = params[:country]
        dessert.area = params[:area]
        dessert.discover = params[:discover]
        dessert.save
        redirect_to dessert_path(dessert.id)
    end
    def destroy
        dessert = Dessert.find params[:id]
        dessert.destroy
        redirect_to desserts_path
    end
end