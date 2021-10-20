Brewery.destroy_all

Brewery.create(:name => 'Otherside Brewing Co', :location => 'Fremantle, Australia', :logo => 'https://craftypint.s3.amazonaws.com/crafty5/brewer/Otherside-logo-2-190130-141517.png')
Brewery.create(:name => 'Eagle Bay Brewery', :location => 'Eagle Bay, Australia', :logo => 'https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty/brewer/Eagle-Bay-Brewing-logo-e78d-1.png')
Brewery.create(:name => 'Nowhereman Brewing Co', :location => 'Leederville, Australia', :logo => 'https://craftypint.s3.amazonaws.com/crafty4/brewer/Nowhereman-logo-180410-183928.png')
Brewery.create(:name => 'Boatrocker Brewers & Distillers', :location => 'Braeside, Australia', :logo => 'https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty4/brewer/Boatrocker-Distillers-logo-171031-053847.png')
Brewery.create(:name => 'Sailors Grave Brewing', :location => 'Orbost, Australia', :logo => 'https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty/brewer/Sailors-Grave-logo-0564-1.png')

puts "#{ Brewery.count } breweries created"

Beer.destroy_all

Beer.create(:name => 'Rhapsody', :abv => 5.0, :image => 'https://www.craftypint.com/thumb/200x400/fit/https://craftypint.s3.amazonaws.com/crafty5/beer/Nowhereman-Rhapsody-XPA-2019-191026-054132.png', :beer_style => 'XPA', :brewery_id => '')
Beer.create(:name => 'Leederville Draught', :abv => 4.2, :image => 'https://www.craftypint.com/thumb/200x400/fit/https://craftypint.s3.amazonaws.com/crafty/beer/Nowhereman-Leederville-Draught-210916-153525.png', :beer_style => 'German Style Pilsner', :brewery_id => '')
Beer.create(:name => 'Crate Digger', :abv => 4.5, :image => 'https://www.craftypint.com/thumb/200x400/fit/https://craftypint.s3.amazonaws.com/crafty/beer/Beers-211019-054430.jpg', :beer_style => 'American Pale Ale', :brewery_id => '')
Beer.create(:name => 'Kolsch', :abv => 4.7, :image => 'https://www.craftypint.com/thumb/200x400/fit/http://craftypint.s3-ap-southeast-2.amazonaws.com/files/assets/accff5df/Eagle-Bay-Kolsch.jpg', :beer_style => 'Kolsch', :brewery_id => '')
Beer.create(:name => 'Harvest', :abv => 5.4, :image => 'https://www.craftypint.com/thumb/200x400/fit/https://craftypint.s3.amazonaws.com/crafty5/beer/Otherside-Brew-Harvest-red-ale-190130-135529.png', :beer_style => 'American Red Ale', :brewery_id => '')


puts "#{ Beer.count } beers created"
