Player.create :name => 'Jack Steele', :position => 'MID', :club => 'STK', :scores => '78,109,125,121,115,106,89,136,117,84,118,137,133,,114,157,138,149,106,162,139,103,134'
Player.create :name => 'Max Gawn', :position => 'RUC', :club => 'MEL', :scores => '73,108,135,132,131,107,72,108,105,129,118,108,119,,97,96,108,95,119,109,84,97,139'

puts "Database seeded. #{ Player.count } players created"
