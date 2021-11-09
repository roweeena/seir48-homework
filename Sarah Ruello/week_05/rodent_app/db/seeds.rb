Rodent.destroy_all

Rodent.create :name => 'North American Beaver', :family => 'Castoridae', :lifespan => 12
Rodent.create :name => 'Eastern Chipmunk', :family => 'Sciuridae', :lifespan => 3

puts "#{ Rodent.count } rodents created"