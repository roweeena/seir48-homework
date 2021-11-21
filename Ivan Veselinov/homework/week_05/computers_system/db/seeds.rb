# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Component.destroy_all

Component.create(:gpu => 'Nvidia 9500GT', :ram => '8gb ddr4', :hdd => '250gb', :ssd => '250gb', :motherboard => 'Asrock 22')
Component.create(:gpu => 'Nvidia 9400GS', :ram => '16gb ddr4', :hdd => '500gb', :ssd => '500gb', :motherboard => 'Asrock 111')
Component.create(:gpu => 'Nvidia 440GX', :ram => '2gb ddr3', :hdd => '500gb', :ssd => '125gb', :motherboard => 'Asrock ')

puts "#{Component.count} Components created"

Processor.destroy_all

Processor.create(:name => 'Intel', :model => 'I7', :year => 2016)
Processor.create(:name => 'AMD', :model => 'Ryzen', :year => 2019)
Processor.create(:name => 'Intel', :model => 'I9', :year => 2021)

puts "#{Processor.count} Processors created"
