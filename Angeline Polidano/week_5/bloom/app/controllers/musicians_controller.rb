class MusiciansController < ApplicationController
  def index
    @musicians = Musician.all

  end
  def show
    @musicians = Musician.find params[:id]
  end
  def new
    @album = Musician.new # blank template to create a form.
  end

  def create
  musician = Musician.create musician_params
  redirect_to musician # show page
 end

 def edit
   @musician = Musician.find params[:id]
 end

def update
  musician = Musician.find params[:id]
  musician.update musician_params
  redirect_to musician
end


 def destroy
   musician = Musician.find params[:id]
   musician.destroy
   redirect_to musician_path

end

 private # this makes all the following methods private ( so only use at the end)
 def musician_params # strong params ( see docs)
   params.require(:musician).permit(:name, :nationality, :dob, :period, :image)
 end
end
