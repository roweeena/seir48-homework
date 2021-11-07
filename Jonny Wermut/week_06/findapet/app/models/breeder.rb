class Breeder < ApplicationRecord
	has_many :listings
	has_and_belongs_to_many :breeds, :optional => true
	has_and_belongs_to_many :users, :optional => true
end
