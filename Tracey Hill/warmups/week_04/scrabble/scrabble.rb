require 'pry'

def scrabble(word)
    @word = word || ""
    @values = { 1 =>  ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
                2 =>  ['D', 'G'],
                3 =>  ['B', 'C', 'M', 'P'],
                4 =>  ['F', 'H', 'V', 'W', 'Y'],
                5 =>  ['K'],
                8 =>  ['J', 'X'],
                10 => ['Q', 'Z']
              }
            
end

def score
    result = 0
    @word.split('').each do |letter|
      @values.each do |k, v|
        if v.include?(letter.upcase)
          result += k
        end
      end
    end
    result
end

def self.score(word)
    Scrabble.new(word).score
end

def scrabble

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
# create a variable to store a score
score = 0


points[double_letter] *= 2 unless double_letter == ''

# letter by letter though word
word.each_char do |letter|

    score += points[letter]

end



puts "#{ word } is worth #{ score } points"

end

puts "enter in a word to see a scrabble score:"

user_word = gets.chomp.downcase

puts "any double word score letters? If not press enter: "

user_word = gets.chomp.downcase

scrabble(user_word)

