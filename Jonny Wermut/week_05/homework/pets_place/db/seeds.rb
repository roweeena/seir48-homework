Breeder.destroy_all

Breeder.create(:name => 'Ken Done', :breedType => 'Shiba Inu', :location => 'NSW', :about => 'blah blah blahb lah', :phone => '0415854988', :email => 'ken@done.com')
Breeder.create(:name => 'Pat Done', :breedType => 'Groodle', :location => 'VIC', :about => 'blah blah blahb lah', :phone => '0482444588', :email => 'pat@done.com')
Breeder.create(:name => 'Jon Done', :breedType => 'Labradore', :location => 'QLD', :about => 'blah blah blahb lah', :phone => '0462584966', :email => 'jon@done.com')

puts "#{Breeder.count} breeders created."

Pet.destroy_all

Pet.create(:name => 'Billy', :dob => '2021-08-28')
Pet.create(:name => 'Mochi', :dob => '2021-09-12')
Pet.create(:name => 'Gary', :dob => '2021-10-20')

puts "#{Pet.count} pets created."

