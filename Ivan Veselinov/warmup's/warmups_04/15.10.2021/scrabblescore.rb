# Scrabble Score

# Write a RUBY program that, given a word, computes the scrabble score for that word.
#
# ```ruby
# scrabble('cabbage');
# // => 14
# scrabble('cabbage'); // with b doubled, g tripled and a double word
# // => 48
# ```

## Letter Values
#
# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10

def scrabble(word)

points = {
  	"a" => 1,
  	"e" => 1,
  	"i" => 1,
  	"o" => 1,
  	"u" => 1,
  	"l" => 1,
  	"n" => 1,
  	"r" => 1,
  	"s" => 1,
  	"t" => 1,
  	"d" => 2,
  	"g" => 2,
  	"b" => 3,
  	"c" => 3,
  	"m" => 3,
  	"p" => 3,
  	"f" => 4,
  	"h" => 4,
  	"v" => 4,
  	"w" => 4,
  	"y" => 4,
  	"k" => 5,
  	"j" => 8,
  	"x" => 8,
  	"q" => 10,
  	"z" => 10,
  }
    puts word

      #create a varialbe to store a Score
      score =0
      #go to letter by letter througth word
      word.each_char do |letter|
      #check in proint for a key that matches letter from word
      #take it's value add it to word
      score += points[letter] #try with puts = points[letter] !access to points
      #output message with the full score result

end
    puts "#{word} is worth #{score} points" # TRY TO PUT THIS BEFORE END!!
end

  puts"Enter in a word to see a score: "
  user_word = gets.chomp.downcase
  scrabble(user_word)
  # scrabble ('srcabble')

##############################################################################

# # You can play a :double or a :triple letter.
# # You can play a :double or a :triple word.
# def scrabble(word, double_letter)
#
# points = {
#   	"a" => 1,
#   	"e" => 1,
#   	"i" => 1,
#   	"o" => 1,
#   	"u" => 1,
#   	"l" => 1,
#   	"n" => 1,
#   	"r" => 1,
#   	"s" => 1,
#   	"t" => 1,
#   	"d" => 2,
#   	"g" => 2,
#   	"b" => 3,
#   	"c" => 3,
#   	"m" => 3,
#   	"p" => 3,
#   	"f" => 4,
#   	"h" => 4,
#   	"v" => 4,
#   	"w" => 4,
#   	"y" => 4,
#   	"k" => 5,
#   	"j" => 8,
#   	"x" => 8,
#   	"q" => 10,
#   	"z" => 10,
#   }
#     puts word
#
#       #create a varialbe to store a Score
#       score =0
#
#       points[double_letter] *= 2 unless double_letter == '' # code to double letter
#
#       #go to letter by letter througth word
#       word.each_char do |letter|
#       #check in proint for a key that matches letter from word
#       #take it's value add it to word
#       score += points[letter] #try with puts = points[letter] !access to points
#       #output message with the full score result
# end
#
#     puts "#{word} is worth #{score} points" # TRY TO PUT THIS BEFORE END!!
#
# end
#
#   puts"Enter in a word to see a score: "
#   user_word = gets.chomp.downcase
#   puts"Are any letter here double if not:  "
#   user_double = gets.chomp.downcase
#   scrabble(user_word, user_double)
#   # scrabble ('srcabble')
