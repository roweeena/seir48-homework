class Track < ActiveRecord::Base
  belongs_to :driver, :optional => true
end
