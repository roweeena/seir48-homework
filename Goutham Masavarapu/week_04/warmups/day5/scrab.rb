# # Scrabble Score
#
# Write a RUBY program that, given a word, computes the scrabble score for that word.
#
# ```ruby
# scrabble('cabbage');
# // => 14
# scrabble('cabbage'); // with b doubled, g tripled and a double word
# // => 48
# ```
#
# ## Letter Values
#




# Hash rocket notation here so we keep our keys as integers.

values = {
  1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2 => ["D", "G"],
  3 => ["B", "C", "M", "P"],
  4 => ["F", "H", "V", "W", "Y"],
  5 => ["K"],
  8 => ["J", "X"],
  10 => ["Q", "Z"]
}

p "Give me yo mouf wurds:"

  # Get an input, cut any whitespace or new lines off the end.
  word = gets.chomp
  score = 0;

  # Break our word into an array and change it to uppercase, then start looping through it.
  word.upcase.split('').each do | letter |
  # Letter is an arbitrary value that refers to the index of whatever the loop is iterating. In this case, the first value.


  # Now that we have our letter, start checking if it is in our values hash.
      values.each do | key, value |

        # If our value array has the letter in it, add the key value of that array to the score.
        score += key if values[ key ].include( letter )
      end

  end

  multiplier = {
    two: score * 2,
    three: score * 3
  }


  # Oh my god, string interpolation. So hot right now.
  p "Your word was '#{ word }', it's worth #{ score }."

  p multiplier[:two]

# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# ```
#
# ## Extensions
#
# - You can play a `:double` or a `:triple` letter.
# - You can play a `:double` or a `:triple` word.
#
# ### Hint
#
# ```ruby
#   points = {
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
# ```
