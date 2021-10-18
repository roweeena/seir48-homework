def returnEric
    a = ["Anil", "Erik", "Jonathan"]
    puts a[1]
    a.push("Joshua")
    puts a
end

# returnEric

def returnNums
    h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
    puts h[1]
    puts h[:two]
    h.merge!({3 => "Three"})
    h[:four] = 4;
    puts h
end

# returnNums

def dataStructures
    is = {true => "It's true!", false => "It's false"}
    puts is[2 + 2 == 4]
end

dataStructures