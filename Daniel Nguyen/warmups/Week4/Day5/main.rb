require "pry"

@points = {
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


# SIMPLE VERSION: not worried about double/triple letters/word
def scrabble_simple word,
  score = 0
  word.each_char { |char| score += @points[char] }
  score
end


# ACCURATE, COMPLEX VERSION
def scrabble word_hash

  calculation = [] # To be logged to console

  score = 0

  # CALCULATE EACH CHARACTER
  # Iterates through each char and with each index
  word_hash[:word].each_char.with_index do |char, index|

    # Applies points for the char at this exact index, and NOT any other instances of this char
    if word_hash[:triple_indexes].include? index
      calculation << "#{ char }=> #{ @points[char] } + #{ @points[char] } + #{ @points[char] }"
      score += @points[char] * 3
    elsif word_hash[:double_indexes].include? index
      calculation << "#{ char }=> #{ @points[char] } + #{ @points[char] }"
      score += @points[char] * 2
    else
      calculation << "#{ char }=> #{ @points[char] }"
      score += @points[char]
    end

  end

  # APPLY DOUBLE/TRIPLE WORD BONUS
  if word_hash[:triple_word]
    calculation << "TRIPLE WORD"
    score *= 3
  elsif word_hash[:double_word]
    calculation << "DOUBLE WORD"
    score *= 2
  end

  # Log for debugging
  puts calculation

  # Implicit return
  score
end

# example argument
word_hash = {
  :word => "cabbage",
  :double_indexes => [ 1, 3 ],
  :triple_indexes => [ 5 ],
  :double_word => true,
  :triple_word => false
}

binding.pry
