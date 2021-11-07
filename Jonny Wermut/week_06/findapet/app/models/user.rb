class User < ApplicationRecord
  validates :email, :presence => true, :uniqueness => true
  has_secure_password
  has_and_belongs_to_many :breeders, :optional => true
  has_many :listings, :through => :breeders
end
