# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Author.destroy_all
#
# Author.create(:name => 'JK Rowling', :nationality => 'British', :dob => '1965-07-31', :genre => 'magical', :image => 'https://variety.com/wp-content/uploads/2016/02/jk.jpg?w=1000')
# Author.create(:name => 'Rober Kiyosaki', :nationality => 'USA', :dob => '1947-08-08', :genre => 'finance', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiu1_2eWkUJ_7ZshZHqN-EISC4ksMHfPvjA&usqp=CAU')
#
#     Author.create(:name => 'John Gresham', :nationality => 'USA', :dob => '1995-02-08', :genre => 'legal thrillers', :image => 'https://media2.fdncms.com/styleweekly/imager/u/original/12096615/news42_grisham.jpg')
#
#     puts "#{ Author.count } Authors created."

Author.destroy_all

rowling = Author.create ({
  author: "J K Rowling",
  nationality: "British",
  dob: "1965/07/31",
  genre: "magical",
  image: "http://shortyawards.com.s3.amazonaws.com/entries/8th/jk_2617100b.jpg"
  })

  tolkien = Author.create ({
    author: "Rober Kiyosaki",
    nationality: "USA",
    dob: "1947/08/08",
    genre: "finance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiu1_2eWkUJ_7ZshZHqN-EISC4ksMHfPvjA&usqp=CAU"
    })

    coelho = Author.create ({
      author: "John Gresham",
      nationality: "USA",
      dob: "1947/08/24",
      genre: "legal",
      image: "https://media2.fdncms.com/styleweekly/imager/u/original/12096615/news42_grisham.jpg"
      })

    puts "Author Count: #{Author.all.count}"



Book.destroy_all

    Book.create(
        :title => 'Harry Potter and The Philosopher Stone',
        :published => '1997',
        :genre => 'fantasy',
        :language => 'English',
        :image => 'https://vignette3.wikia.nocookie.net/harrypotter/images/7/7b/Harry01english.jpg/revision/latest/scale-to-width-down/333?cb=20150208225304'
      )


      Book.create(
          :title => 'Rich Dad Poor Dad',
          :published => '1997',
          :genre => 'finance',
          :language => 'English',
          :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSva0xKR1lixSZ05L81SPz4eLiJOAHFSgUxLg&usqp=CAU'
        )

        Book.create(
            :title => 'The client',
            :published => '1993',
            :genre => 'legal',
            :language => 'English',
            :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr19OE6pB8PwlqIeR4u46tAKrMvn_otOOjEQ&usqp=CAU'
          )


      puts "Books created : #{Book.count}"
