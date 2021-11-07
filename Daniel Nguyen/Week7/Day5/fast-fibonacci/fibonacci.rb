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

  # (0..900).each do |n|
  #   print "#{ n }   "
  #   p fibonacci n
  # end

# Joel's memoisation solution
def fib_memo n
  # if @fib.nil?
  #   @fib = {} # TODO: improve this
  # end

  # @fib = {} if @fib.nil?
  # @fib = @fib || {}
  @fib ||= {}



  if @fib[n]
    @fib[n]
  elsif n <= 2
    1
  else
    @fib[n] = fib_memo(n-1) + fib_memo(n-2)
  end
end

# Joel's iterative solutive
def fib n, a=1, b=1
  if n == 1
    b
  else
    fib n-1, b, a+b
  end
end



binding.pry
