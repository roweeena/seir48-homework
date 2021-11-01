class Genre < ApplicationRecord
  has_and_belongs_to_many :songs
  has_many :artists, :through => :songs
end
