def is_triangle (a,b,c)
    if (a + b) > c && (a + c) > b && (b + c) > a
        puts "This is a valid triangle" 
    else
        puts "This is not a valid triangle"
    end
end


is_triangle(1,2,2) #true
is_triangle(5,1,2) #false
is_triangle(4,2,3) #true
