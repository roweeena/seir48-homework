class SecretnumberController < ApplicationController

  def guess

  end

def results

numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
@random_number = numbers[rand(10)]
@guess = params[:number]


end

end
