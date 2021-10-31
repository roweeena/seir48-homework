# # Grammar
#
# “I before E except after C” is perhaps the most famous English spelling rule. For the purpose of this challenge, the rule says:
# if “ei” appears in a word, it must immediately follow “c”.
# If “ie” appears in a word, it must not immediately follow “c”.
#
# A word also follows the rule if neither “ei” nor “ie” appears anywhere in the word. Examples of words that follow this rule are:
# fiery hierarchy hieroglyphic
# ceiling inconceivable kenbone
# daily drummachine one two three
#
#
# Write a function that tells you whether or not a given word follows the “I before E except after C” rule.
#
# **Bonus** - allow the function to return true if the word matches any of the following words also -
# sleigh stein fahrenheit
# deifies either nuclei reimburse
# ancient juicier societies


def grammar word

  exceptions = [
    "sleigh",
    "stein",
    "fahrenheit",
    "deifies",
    "either",
    "nuclei",
    "reimburse",
    "ancient",
    "juicier",
    "societies"
  ]

  exceptions.each { |exception| return true if word == exception }

  if word.include? "ie"
    letter_before_ie = word.partition("ie")[0][-1]
    return true if letter_before_ie != "c"
    return false if letter_before_ie == "c"
  end

  if word.include? "ei"
    letter_before_ei = word.partition("ei")[0][-1]
    return true if letter_before_ei == "c"
    return false if letter_before_ei != "c"
  end

  return true

end
