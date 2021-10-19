class LawyersController < ActiveRecord::Base
  def index
    @lawyers = Lawyers.all
end

def show
    @lawyer = Lawyer.find params[:id]
  end

  def new
  end

  def create
    lawyer = Lawyer.create :name => params[:name], :firm => params[:firm], :image => params[:image]
    redirect_to lawyer_path(lawyer.id)
  end

  def edit
    @lawyer = Lawyer.find params[:id]
  end

  def update
    lawyer = Lawyer.find params[:id]
    lawyer.name = params[:name]
    lawyer.firm = params[:firm]
    lawyer.image = params[:image]
    lawyer.save
    redirect_to lawyer_path(lawyer.id)
  end

  def destroy
    lawyer = Lawyer.find params[:id]
    lawyer.destroy
    redirect_to lawyers_path
  end
end
