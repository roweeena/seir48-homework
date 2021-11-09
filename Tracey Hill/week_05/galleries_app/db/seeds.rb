Gallery.destroy_all

Gallery.create :name => 'Louvre', :year_opened => 1793, :works => 38000
Gallery.create :name => 'MoMA', :year_opened => 1939, :works => 150000
Gallery.create :name => 'NGA', :year_opened => 1967, :works => 166000

puts "#{ Gallery.count } galleries created."