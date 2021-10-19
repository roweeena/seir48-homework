LineN = ["Time Square", "34th", "28th", "23rd", "Union Square", "8th"]
LineL = ["8th", "6th", "Union Square", "3rd", "1st"]
Line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def findLocationIndex (line, station)
    i = 0
    if line == "N"
        loop do
            if i < LineN.length()
                if LineN[i] == station
                    return i
                end
            end
            i = i + 1
        end
    end
    if line == "L"
        if i < LineL.length()
            loop do
                if (i < LineL.length())
                    if LineL[i] == station
                        return i
                    end
                    i = i + 1
                end
            end
        end
    end
    if line == "6"
        if i < Line6.length()
            loop do
                if (i < Line6.length())
                    if Line6[i] == station
                        return i
                    end
                    i = i + 1
                end
            end
        end
    end
end

def findCommonPoint(firstLine, secondLine)
    i = 0
    if firstLine == "N" && secondLine == "6"
        loop do
            

def plan_trip array
    startLine = array[0]
    startStation = array[1]
    startIndex = findLocationIndex(startLine, startStation)
    endLine = array[2]
    endStation = array[3]
end