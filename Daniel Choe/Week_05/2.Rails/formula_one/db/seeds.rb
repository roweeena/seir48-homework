Stat.destroy_all

Stat.create :full_name => 'Max Verstappen', :image => '', :team => 'Red Bull', :points => 262.5
Stat.create :full_name => 'Lewis Hamilton', :image => '', :team => 'Mercedes', :points => 256.5
Stat.create :full_name => 'Valtteri Bottas', :image => '', :team => 'Mercedes', :points => 177

puts "#{Stat.count} entries created"
