Billionaire.destroy_all

Billionaire.create :name => 'Bill Gates', :age => 65, :net_worth => 124000000000.0
Billionaire.create :name => 'Mark Zuckerberg', :age => 37, :net_worth => 97000000000.0
Billionaire.create :name => 'Elon Musk', :age => 50, :net_worth => 151000000000.0

puts "#{Billionaire.count}"
