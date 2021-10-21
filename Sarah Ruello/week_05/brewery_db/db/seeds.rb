Style.destroy_all

Style.create(:style_name => 'Porter', :origin_country => 'England')
Style.create(:style_name => 'Saison', :origin_country => 'Belgium')
Style.create(:style_name => 'Stout', :origin_country => 'England')

puts "#{ Style.count } styles created."

Beer.destroy_all

Beer.create(:beer_name => 'Fat Nerd Vanilla Porter', :brand => 'Yulli\'s', :abv => 6, :image => 'https://cdn11.bigcommerce.com/s-4dsnxp/images/stencil/500x659/products/4095/10991/Yullis_Fat_Nerd_Vanilla_Porter__14421.1627375523.png?c=2')
Beer.create(:beer_name => 'Second Jab Hoppy Saison', :brand => 'Badlands', :abv => 7.5, :image => 'https://cdn11.bigcommerce.com/s-4dsnxp/images/stencil/500x659/products/10040/11385/Badlands_Second_Jab_Hoppy_Saison_440ml_Can__67124.1632974293.png?c=2')
Beer.create(:beer_name => 'Coffee Milk Stout', :brand => 'Batch Brewing Co.', :abv => 4.4, :image => 'https://cdn11.bigcommerce.com/s-4dsnxp/images/stencil/500x659/products/9567/10908/Batch_Coffee_Milk_Stout_375ml_Can__00701.1626248644.png?c=2')

puts "#{ Beer.count } Beers created."