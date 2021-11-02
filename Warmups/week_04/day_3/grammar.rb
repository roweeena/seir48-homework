def grammar word
  # does 'word' contain 'ei'
  allowed_words = 'sleigh stein fahrenheit deifies either nuclei reimburse ancient juicier societies'.split(" ")
  if allowed_words.include?( word )
    return true
  end
  if word.include?("ei") && !word.include?("cei")
    return false
  end
  if word.include?("cie")
    return false
  end
  return true
end

puts grammar 'freight'
puts grammar 'frieght'
puts grammar 'ceiling'
puts grammar 'cieling'
puts grammar 'sleigh'
