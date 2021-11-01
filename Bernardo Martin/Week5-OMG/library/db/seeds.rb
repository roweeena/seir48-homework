Author.destroy_all

Author.create(:name => 'Stephen Edwin King', :nationality => 'American', :num_of_books => 4, :image => 'https://stephenking.com/images/press/stephenking-sm.jpg')
Author.create(:name => 'Gabriel Garcia Marquez', :nationality => 'Colombian', :num_of_books => 4, :image => 'https://s26162.pcdn.co/wp-content/uploads/2020/10/2014.12.09-An.Indian.jpg')
Author.create(:name => 'Gregory David Roberts', :nationality => 'Australian', :num_of_books => 4, :image => 'https://static.onecms.io/wp-content/uploads/sites/6/2015/03/gregory-david-roberts-2000.jpg')

puts "#{Author.count} authors created."

Book.destroy_all

Book.create(:title => 'The Institute', :price => 13, :image => 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549044090l/43807359._SY475_.jpg')
Book.create(:title => 'One Hundred Years of Solitude', :price => 13, :image => 'https://m.media-amazon.com/images/I/41oBY3oKQJL.jpg')
Book.create(:title => 'Shantaram', :price => 13, :image => 'https://images-na.ssl-images-amazon.com/images/I/91B3+Se-8eL.jpg')

puts "#{Book.count} books created."
