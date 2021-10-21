def scrabblePoint word
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

    score = 0
    repeatedLetters = []
    timesRepeated = []
    previousLetter = ''
    word.each_char do |letter|

        if letter == previousLetter
            score -= points[letter]
            score += points[letter] * 2 * 2
        # elsif letter == 'g'
        #     score += points[letter] * 5
        else
            score += points[letter]
        end
        puts "#{letter} is worth #{points[letter]}"
        previousLetter = letter
    end

    puts "Final Score is #{score}"
end

scrabblePoint "cabbage"