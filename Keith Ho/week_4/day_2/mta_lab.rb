
@subway = [
  {
    "name" => "N",
    "stops" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },
  {
    "name" => "L",
    "stops" => ["8th", "6th", "Union Square", "3rd", "1st"]
  },
  {
    "name" => "6",
    "stops" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
]

def arr_of_lines line
  i = 0
  while i < @subway.size
    if @subway[i]["name"] == line
      return @subway[i]["stops"]
    end
    i += 1
  end
end

def index_of_stop line, stop
  i = 0
  @a = 0
  while i < @subway.size
    if @subway[i]["name"] == line
      while @a < @subway[i]["stops"].size
        if @subway[i]["stops"][@a] == stop
          return @a
        end
        @a += 1
      end
    end
    i += 1
  end
end

def stops_between line, start, final
  arr_line = arr_of_lines(line)
  index_of_start = index_of_stop(line, start).to_i
  index_of_final = index_of_stop(line, final).to_i

  arr_stops_in_order = []
  @arr_stops = []

  if index_of_start > index_of_final
    if index_of_start - index_of_final > 1
      @arr_stops = arr_line[index_of_final + 1, (index_of_start - index_of_final - 1)]
      i = @arr_stops.size
      while i >= 0
        arr_stops_in_order.push @arr_stops[i]
        i -= 1
      end
      @arr_stops = arr_stops_in_order[1, arr_stops_in_order.size]
    else
      @arr_stops = []
    end
  else
    if index_of_final - index_of_start > 1
      @arr_stops = arr_line[index_of_start + 1, (index_of_final - index_of_start - 1)]
    else
      @arr_stops = []
    end
  end

  return @arr_stops
end

def plan_trip start_line, start_stop, end_line, end_stop
  stops_to_union = stops_between(start_line, start_stop, "Union Square")
  stops_from_union = stops_between(end_line, "Union Square", end_stop)

  if start_stop == "Union Square"
    total_stops = stops_to_union.size + stops_from_union.size + 1
  else
    total_stops = stops_to_union.size + stops_from_union.size + 2
  end

  @message_different_lines = "You must travel through the following stops on the #{ start_line } line:
          #{ stops_to_union.join(", ") } Union Square.
          Change at Union Square.
          Your journey continues through the following stops:
          #{ stops_from_union.join(", ") } #{ end_stop }.
          #{ total_stops } stops in total."

  @message_same_line = "You must travel through the following stops on the #{ start_line } line:
          #{ stops_to_union.join(", ") }, Union Square, #{ stops_from_union.join(", ") }, #{ end_stop }.
          #{ total_stops } stops in total."

  @message_union_square = "You must travel through the following stops on the #{ end_line } line:
          #{ stops_from_union.join(", ") }, #{ end_stop }.
          #{ total_stops } stops in total."

  if start_line != end_line
    if start_stop == "Union Square"
      puts @message_union_square
    else
      puts @message_different_lines
    end
  elsif
    if start_stop == "Union Square"
      puts @message_union_square
    else
      puts @message_same_line
    end
  end
end

def menu
  puts "Trip Planner".center(50)
  puts "*" * 40
  puts "[s] - Start"
  puts "[q] - Quit"
  puts "Enter your choice:"
end

menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice
  when "s"
    puts "L: 1st, 3rd, Union Square, 6th, 8th"
    puts "N: Times Square, 34th, 28th, 23rd, Union Square, 8th"
    puts "6: Astor Place, Union Square, 23rd, 28th, 33rd, Grand Central"
    puts "-" * 20
    puts "Enter your start line:"
    startline = gets.chomp.capitalize
    puts "Enter your start stop:"
    startstop = gets.chomp.capitalize
    puts "Enter your end line:"
    endline = gets.chomp.capitalize
    puts "Enter your end stop:"
    endstop = gets.chomp.capitalize

    plan_trip(startline, startstop, endline, endstop)

  else
    puts "Invalid selection. Choose again."
  end


  menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this Trip Planner!"
