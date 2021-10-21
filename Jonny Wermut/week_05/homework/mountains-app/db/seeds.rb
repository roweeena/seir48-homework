Mountain.destroy_all

Mountain.create :name => 'Everest', :height => 8376, :firstClimbedOn => 1946, :firstClimbedBy => 'Sir Edmund Hilary', :image => 'coming soon'
Mountain.create :name => 'Kilamanjaro', :height => 2323, :firstClimbedOn => 1946, :firstClimbedBy => 'Sir Edmund Hilary', :image => 'coming soon'
Mountain.create :name => 'Coolum', :height => 1343, :firstClimbedOn => 1946, :firstClimbedBy => 'Sir Edmund Hilary', :image => 'coming soon'

puts "#{ Mountain.count } mountains created."
