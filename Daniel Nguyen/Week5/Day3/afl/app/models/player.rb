class Player < ActiveRecord::Base
  belongs_to :club, :optional => true
end
