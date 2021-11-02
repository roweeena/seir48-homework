class Beer < ActiveRecord::Base
  belongs_to :brewery, :optional => true
end
