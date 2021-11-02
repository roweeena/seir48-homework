class Listing < ApplicationRecord
	belongs_to :breeder, :optional => true
	belongs_to :breed, :optional => true
end
