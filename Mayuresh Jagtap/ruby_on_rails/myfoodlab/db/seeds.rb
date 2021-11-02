User.destroy_all
u1 = User.create :email => 'jonsey@ga.co', :password => 'chicken'
u2 = User.create :email => 'craigsy@ga.co', :password => 'chicken'
puts "#{User.count} users."



Recipe.destroy_all

r1 = Recipe.create :title => 'Pav Bhaji 🥘',  :image => 'https://www.newsdrives.com/wp-content/uploads/2020/11/pav_bhaji_blog.jpg', :prep_time => 30, :cook_time => 60, :course => 'entree', :serves => 2, :main_recipe => 'recipe coming soon', :video => '<iframe width="560" height="315" src="https://www.youtube.com/embed/RKNogWbAivY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

r2 = Recipe.create :title => 'Butter Chicken 🍗', :image => 'https://vismaifood.com/storage/app/uploads/public/ad2/3c9/7ee/thumb__700_0_0_0_auto.jpg', :prep_time => 30, :cook_time => 60, :course => 'mains', :serves => 2, :main_recipe => 'recipe coming soon', :video => '<iframe width="560" height="315" src="https://www.youtube.com/embed/RKNogWbAivY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

r3 = Recipe.create :title => 'Lamb Biryani 🍚', :image => 'https://nishkitchen.com/wp-content/uploads/2019/07/Lamb-Biryani-3B.jpg', :prep_time => 30, :cook_time => 60, :course => 'mains', :serves => 2, :main_recipe => 'recipe coming soon', :video => 'video coming soon'

puts "#{Recipe.count} recipes."


Myfood.destroy_all
m1 = Myfood.create :title => 'Street Food'
m2 = Myfood.create :title => 'Veg Treat'
m3 = Myfood.create :title => 'Non-Veg Masala'
puts "#{Myfood.count} recipes."


##################ASSOCIATIONS##########################
puts "Myfoods and recipes"
m1.recipes << r1
m2.recipes << r1 << r2
m3.recipes << r2 << r3

puts "Myfoods and users"
u1.myfoods << m1 << m2
u2.myfoods << m2 << m3
