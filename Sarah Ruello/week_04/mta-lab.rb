
# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

line_n = ["Times Square", "34th", "28th", "33rd", "Union Square", "8th"]
line_l = ["8th", "6th", "Union Square", "3rd", "1st"]
line_6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def plan_line(line_name, start, finish)
    startIndex = line_name.find_index(start)
	endIndex = line_name.find_index(finish)    
	puts "Start #{startIndex} and finish #{endIndex}"

    stations = []

    if (start < finish) 
        for i in (startIndex...endIndex)
            stations.push(line_name[i])
        end
        stations.push(line_name[endIndex])
    else 
        for i in (startIndex...endIndex).reverse_each
            stations.push(line_name[i])
        end
        stations.unshift(line_name[endIndex])
        
	end

    p stations

end    


# def plan_trip (dep_line, dep_station, arrival_line, arrival_station)



# end    

plan_line(line_n, "34th", "8th")
plan_line(line_l, "8th", "3rd")