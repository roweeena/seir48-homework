Album.destroy_all

Album.create(:name => 'Blood Sugar Sex Magik', :year => '1991', :length => '73:55', :no_of_songs => 17, :image => 'https://tuonelamagazine.com/wp-content/uploads/2021/09/Red_Hot_Chili_Peppers_Blood_Sugar_Sex_Magik.jpg')
Album.create(:name => 'Californication', :year => '1999', :length => '56:24', :no_of_songs => 15, :image => 'https://express-images.franklymedia.com/5829/sites/14/2021/04/09093340/81EhgcJGTNL._SL1448_.jpg')
Album.create(:name => 'Stadium Arcadium', :year => '2006', :length => '122:25', :no_of_songs => 28, :image => 'https://i.redd.it/pnrsxaht89x61.jpg')

puts "#{ Album.count } albums created."
