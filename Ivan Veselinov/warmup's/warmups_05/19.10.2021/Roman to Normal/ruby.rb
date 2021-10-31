# we must know this  !!!

  def convert year
  roman = {
  1000 => 'M',
  900 => 'CM',
  500 => 'D',
  400 => 'CD',
  100 => 'C',
  90 => 'XC',
  50 => 'L',
  40 => 'XL',
  10 => 'X',
  9 => 'IX',
  5 => 'V',
  4 => 'IV',
  1 => 'I'
  }

  output = ''

  roman.each do |key, value|
    # puts "key: #{key}, Value: #{value}"  # check if its working loop all of them
  while year >= key
    output += "#{value}"
    year -= key
  end
end

output #return uputput

end

puts convert 1990
puts convert 1920
puts convert 1600
puts convert 8
puts convert 2008
