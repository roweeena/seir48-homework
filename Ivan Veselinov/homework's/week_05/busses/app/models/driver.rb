class Driver < ActiveRecord::Base
belongs_to :bus, :optional => true
end
