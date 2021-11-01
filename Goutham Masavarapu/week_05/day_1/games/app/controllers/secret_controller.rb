class SecretController < ApplicationController

def result
  @randomnumber = Random.rand(1..10)

  @chosen_num = params["num"]

  # @won = "You Won! Well Done!!"
  # @lost = "Darn!!"
  # @playtime =
  #   if @chosennumber == @randomnumber
  #     @won
  #   else
  #     @lost
  #   end
end


end

# flash[:notice] = "You Won! Well Done!!"
# flash[:notice] = "Nope!! Try again"
