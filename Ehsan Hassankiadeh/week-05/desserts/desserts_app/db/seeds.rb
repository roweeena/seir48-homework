Dessert.destroy_all

Dessert.create :name => 'Sahra', :country=> 'Iran', :area=> 2345
Dessert.create :name => 'Namib', :country=> 'Africa', :area=> 34092
Dessert.create :name => 'Gobi', :country=> 'China', :area=> 34516

puts "#{Dessert.count} deserts been made."

