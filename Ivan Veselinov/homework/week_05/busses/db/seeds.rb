# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bus.destroy_all

b1 = Bus.create(:model => 'Mercedes', :year => '2015', :number => '5', :lines => '15', :stops => '15', :image => 'https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=')
b2 = Bus.create(:model => 'Mann', :year => '2015', :number => '5', :lines => '15', :stops => '15', :image => 'https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=')
b3 = Bus.create(:model => 'Mercedes', :year => '2010', :number => '5', :lines => '15', :stops => '15', :image => 'https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=')

puts "#{Bus.count} busses"

Driver.destroy_all

d1 = Driver.create(:name => 'Ivan', :surname => 'Veselinov', :dob => 04/07/1991)
d2 = Driver.create(:name => 'Java', :surname => 'Script', :dob => 04/07/1991)
d3 = Driver.create(:name => 'Ruby', :surname => 'Rails', :dob => 04/07/1991)

puts "#{Driver.count} drivers"

puts "Buses and drivers"
b1.drivers << d1
b2.drivers << d2
b3.drivers << d3
