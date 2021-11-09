Musician.destroy_all

Musician.create(:name => "Ella Fitzgerald", :nationality => "American", :biography => "Jazz Vocalist", :image => "https://downbeat.com/images/news/_full/EllaFitzgeraldWEB.jpg")
Musician.create(:name => "John Martyn", :nationality => "American", :biography => "Folk Artist", :image => "https://i.guim.co.uk/img/media/f316d6dd34117b51561fc7e0990d090c447875f5/0_43_4405_2642/master/4405.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=82e2d2e72741ec9b573b23cf08605b96")

puts "#{ Musician.count } musicians created."



Album.destroy_all

Album.create(:title => "Get Happy!", :released => "1959", :image => "https://upload.wikimedia.org/wikipedia/en/8/82/EllaGetHappy%21.jpg")
Album.create(:title => "Solid air", :released => "1973", :image => "https://muzikrono.org/wp-content/uploads/2014/09/johnmartyn.jpg")

puts "#{ Album.count } albums created."
