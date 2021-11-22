class DriversController < ApplicationController

  def index  #1
    @drivers = Driver.all
  end

  def show #2
    @driver = Driver.find params[:id]
  end

  def new #3
    @driver = Driver.new
  end

  def create #5
    driver = Driver.create driver_params
    redirect_to driver_path(driver)
  end

  def edit #6
    @driver = Driver.find params[:id]
  end

  def update #7
    driver = Driver.find params[:id]
    driver.update driver_params
    redirect_to driver_path

  def destroy
    driver = Driver.find params[:id]
    driver.destroy
    redirect_to drivers_path
  end

  end

private
def driver_params
  params.require(:driver).permit(:name, :surname, :dob, :today, :image, :bus_id)
end

end
