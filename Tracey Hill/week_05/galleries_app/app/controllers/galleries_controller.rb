class GalleriesController < ApplicationController
    def index
      @galleries = Gallery.all
    end
  
    def show
      @gallery = Gallery.find params[:id]
    end
  
    def new
    end
  
    def create
      gallery = Gallery.create :name => params[:name], :image => params[:image], :area => params[:area], :year_opened => params[:year_opened], :works => params[:works], :location => params[:location]
      redirect_to gallery_path(gallery.id) 
    end
  
    def edit
      @gallery = Gallery.find params[:id]
    end
  
    def update
      gallery = Gallery.find params[:id]
      gallery.name = params[:name]
      gallery.image = params[:image]
      gallery.area = params[:area]
      gallery.year_opened = params[:year_opened]
      gallery.works = params[:works]
      gallery.location = params[:location]
      gallery.save
      redirect_to gallery_path(gallery.id)
    end
  
    def destroy
      gallery = Gallery.find params[:id]
      gallery.destroy 
      redirect_to galleries_path
    end
  end