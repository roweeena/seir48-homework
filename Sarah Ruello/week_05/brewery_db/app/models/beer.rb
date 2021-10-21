class Beer < ActiveRecord::Base   
    belongs_to :style, :optional => true
end