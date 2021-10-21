class PagesController < ApplicationController

  def index
    @billionaires = Billionaire.all
  end

  def show
    @billionaire = Billionaire.find params[:id]
    @wealth_time = @billionaire.net_worth / 50000
  end

  def new
  end

  def create
    billionaire = Billionaire.create :name => params[:name], :age => params[:age], :residence => params[:residence], :net_worth => params[:net_worth], :hobbies => params[:hobbies]
    redirect_to billionaire_path(billionaire.id)
  end

  def edit
    @billionaire = Billionaire.find params[:id]
  end

  def update
    billionaire = Billionaire.find params[:id]
    billionaire.name = params[:name]
    billionaire.age = params[:age]
    billionaire.residence = params[:residence]
    billionaire.net_worth = params[:net_worth]
    billionaire.hobbies = params[:hobbies]
    billionaire.save

    redirect_to billionaire_path(billionaire.id)
  end

  def destroy
    billionaire = Billionaire.find params[:id]
    billionaire.destroy
    redirect_to billionaires_path
  end

end
