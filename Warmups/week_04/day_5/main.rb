def scrabble (word, double_letter, triple_letter, bonus_points)
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
  points[double_letter] *= 2 unless double_letter == ""
  points[triple_letter] *= 3 unless triple_letter == ""

  score = 0

  word.each_char do |letter|
    score += points[letter]
  end

  # case bonus_points
  # when "D"
  #   score *= 2
  # when "T"
  #   score *= 3
  # end

  score *= 2 if bonus_points == "D"
  score *= 3 if bonus_points == "T"

  puts "with the word #{word} you score #{score} points."

end


puts "please enter a word:"
word = gets.chomp.downcase
puts "Enter double points letter:"
double_letter = gets.chomp.downcase
puts "Enter triple points letter:"
triple_letter = gets.chomp.downcase
puts "Is it a [D]ouble or [T]riple points word?"
bonus_points = gets.chomp.upcase

scrabble(word, double_letter, triple_letter, bonus_points)
