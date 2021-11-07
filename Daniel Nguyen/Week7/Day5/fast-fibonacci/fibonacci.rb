# Fibonacci Sequence

require 'pry'

def fibonacci n
  @n = n
  @fibonacci = [0, 1];

  if @n <= 1
    return @fibonacci[n]
  end

  def helper i
    if (i > @n)
      return
    end

    next_fib = @fibonacci[i-2] + @fibonacci[i-1]
    @fibonacci << next_fib
    helper i+1
  end

  helper 2
  @fibonacci[@n]
end

(0..900).each do |n|
  print "#{ n }   "
  p fibonacci n
end

binding.pry
