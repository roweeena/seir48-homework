Ocean.destroy_all

Ocean.create :name => 'Atlantic', :country => 'USA'
Ocean.create :name => 'AtlanticTwo', :country => 'NYC'
Ocean.create :name => 'AtlanticThree', :country => 'Rochester'

puts "#{Ocean.count} Oceans were created"
