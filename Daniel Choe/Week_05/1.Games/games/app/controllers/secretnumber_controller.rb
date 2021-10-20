class SecretnumberController < ApplicationController
  def secretnumberhome
    @numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    # render :secretnumberhome
  end

  def resultcheck
    @rand_num = rand(11)
    # render :resultcheck
  end
end
