class MagicController < ApplicationController

  def index
  end

  def results
    fortune = [
      'Clowns are coming to eat you',
      'You will die a clown related death',
      'I dunno - something creepy about clowns'
    ]
    @prediction = fortune.sample
  end

end
