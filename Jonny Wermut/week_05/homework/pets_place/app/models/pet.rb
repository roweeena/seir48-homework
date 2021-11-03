class Pet < ActiveRecord::Base
	belongs_to :breeder, :optional => true
end