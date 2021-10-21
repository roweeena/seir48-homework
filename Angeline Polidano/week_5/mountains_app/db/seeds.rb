# Mountain.destroy_all

Mountain.create :name => "Mt Fuji", :location => "Japan", :height => 123958, :type_of => "volcanic"
Mountain.create :name => "Mt Kilimanjaro", :location => "Africa", :height => 19340, :type_of => "volcanic"
Mountain.create :name => "Mt Everest", :location => "Himalayas, Nepal/China", :height => 290317, :type_of => "granite"


puts "#{ Mountain.count } mountains created."
