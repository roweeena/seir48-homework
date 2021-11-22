class BusesController < ApplicationController

  def index #step 1
    @buses = Bus.all
  end

  def show #step 2
    @buses = Bus.find params[:id]
  end

  def new #step 3
    @bus = Bus.new
  end

  def create #step 5
    bus = Bus.create bus_params
    redirect_to bus_path(bus)
  end

  def edit #step 6
    @bus = Bus.find params[:id]
  end

  def update # step 7
    bus = Bus.find params[:id]
    bus.update bus_params
    redirect_to bus_path
  end

  def destroy #8
    bus = Bus.find params[:id]
    bus.destroy
    redirect_to buses_path
  end

  private
  def bus_params #step 4
    params.require(:bus).permit(:model, :year, :number, :lines, :stops, :image)
  end
end
