class Song < ActiveRecord::Base
  belongs_to :album, :optional => true
end
