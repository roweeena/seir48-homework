def raindrops (num)
  result = ""

  if num % 3 == 0
    result = "Pling"
  end
  if num % 5 == 0
    result = result + "Plang"
  end
  if num % 7 == 0
    result = result + "Plong"
  end
  if result == ""
    result = num
  end

  puts result
end

raindrops(28)
raindrops(1755)
raindrops(34)
