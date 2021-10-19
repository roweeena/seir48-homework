class EightballController < ApplicationController

  def eightballhome
    render :eightballhome
  end

  def answer
    response = ['It is certain',
                'As I see it, yes',
                'Reply hazy, try again',
                'My sources say no',
                'Very doubtful'
    ]
    @answer = response[rand(0 .. response.size - 1)]
    # render :answer
  end
end
