class Breed < ApplicationRecord
	has_and_belongs_to_many :breeders, :optional => true
	has_many :listings
end
