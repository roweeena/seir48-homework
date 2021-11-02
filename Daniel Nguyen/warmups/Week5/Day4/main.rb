def grammar_check word
  exceptions = 'sleigh stein fahrenheit deifies either nuclei reimburse ancient juicier societies'.split(' ')

  errors = {
    :exception => exceptions.include?(word),
    :na => !/ei/.match?(word) && !/ie/.match?(word),
    :has_ie => /ie/.match?(word),
    :has_ei_and_cei => /ei/.match?(word) && /cei/.match?(word),
  }

  result = errors.all?
end


def run_tests
  test_words = 'fiery hierarchy hieroglyphic ceiling inconceivable kendone daily drummachine one two three'.split(' ')
  exceptions = 'sleigh stein fahrenheit deifies either nuclei reimburse ancient juicier societies'.split(' ')

  puts "TESTS:"
  test_words.each do |word|
    puts "#{ grammar_check word } – #{ word }"
  end

  puts "\nEXCEPTIONS:"
  exceptions.each do |word|
    puts "#{ grammar_check word } – #{ word }"
  end
end

run_tests

require "pry"
binding.pry
