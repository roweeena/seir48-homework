class Style < ActiveRecord::Base  
        
    has_many :beers, dependent: :destroy # destroys all beer children if deleted!

end