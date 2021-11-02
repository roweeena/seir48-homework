def check(word)
  allowed_words = ['sleigh', 'stein', 'fahrenheit',
    'deifies', 'either', 'nuclei', 'reimburse',
    'ancient', 'juicier', 'societies']

  allowed_words = 'sleigh stein fahrenheit deifies either nuclei reimburse ancient juicier societies'.split(" ")
	
  if word.include?("ei") && !word.include?("cei") 
    return false 
  end
	if word.include? "cie" 
    return false 
  end
	return true
end


puts check 'hello'
puts check 'cie'
puts check 'ie'