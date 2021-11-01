class Album < ActiveRecord::Base
  belongs_to :musician, :optional => true
end
