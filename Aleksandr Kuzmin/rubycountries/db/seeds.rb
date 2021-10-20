Country.destroy_all
Country.create(:name => 'Russia', :capital => 'Moscow', :currency => 'Russian ruble', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png')

Country.create(:name => 'Ukraine', :capital => 'Kiev', :currency => 'Hrivna', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1599px-Flag_of_Ukraine.svg.png')

Country.create(:name => 'Kazakhstan', :capital => 'Nur-Sultan', :currency => 'Tenge', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/250px-Flag_of_Kazakhstan.svg.png')

Country.create(:name => 'Belarus', :capital => 'Minsk', :currency => 'Belarusian ruble', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/250px-Flag_of_Belarus.svg.png')

puts "#{ Country.count } countries created."

City.destroy_all
City.create(:name => 'Samara', :formation => '1642', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png')

City.create(:name => 'Harkov', :formation => '1703', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1599px-Flag_of_Ukraine.svg.png')

City.create(:name => 'Almaty', :formation => '1805', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/250px-Flag_of_Kazakhstan.svg.png')

City.create(:name => 'Mogilev',:formation => '1532', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/250px-Flag_of_Belarus.svg.png')

puts "#{ City.count } cities created."
