# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Wonder.destroy_all

Wonder.create :name => 'The Pyramids', :location => 'Giza', :year => 20
Wonder.create :name => 'Hanging Gardens', :location => 'Babylon', :year => 15
Wonder.create :name => 'Colossus', :location => 'Rhodes', :year => 300

puts "#{ Wonder.count } wonders created."
