# “I before E except after C” is perhaps the most famous English spelling rule. For the purpose of this challenge, the rule says: if “ei” appears in a word, it must immediately follow “c”. If “ie” appears in a word, it must not immediately follow “c”.
# A word also follows the rule if neither “ei” nor “ie” appears anywhere in the word. Examples of words that follow this rule are:
# fiery hierarchy hieroglyphic ceiling inconceivable kendone daily drummachine one two three
# Write a function that tells you whether or not a given word follows the “I before E except after C” rule.

# # Pat solution
# #1
# def grammar word
#   #does 'word' contain 'ie'
#   if word.include?("ei") && !word.include?("cei")
#     return false
# end
# return true
# end
# puts grammar "freigth"
# puts grammar "cieceo"
# puts grammar "dciedddd"


# Pat solution
#2

def grammar word
  allowed_words = sleigh 'stein fahrenheit deifies either nuclei reimburse ancient juicier societies'.split(" ")

  if allowed_words.include?(word)
    return true
  end
  if word.include?("ei") && !word.include?("ie")
    return false
end
if word.include?("ei") && !word.include?("ie")
  return false
end
  return true
end
puts grammar 'freigth'
puts grammar "cieceo"
puts grammar "dciedddd"





# def words name
#
# puts "name"
#   name.each_char do |n|
#     if name == 'ie' && name == 'ei'
#       name.include?
#       # name.gsub('c')
#       # puts name[n].replace('c')
#       # then('c')
#       # name[n].gsub('ie', "c")
#     else
#       puts "#{name[n]}"
#     end
#   end
# end
#
#   words "ie"

# def words name

  # puts 'name'
  #
  # name.each_char do |n|
  #
  #   case score
  #   when 'ie' then 'c'
  #   when 'ie' then 'c'
  #   else score.next
  #
  #   end
  #   score
  # end
  #
  # words "ie"
