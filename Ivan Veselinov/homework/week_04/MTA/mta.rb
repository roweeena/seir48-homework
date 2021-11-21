def menu_show
  puts "MTA RAILWAYS".center(80)
  puts "<>" *40
  puts "[n] -> n Line"
  puts "[l] -> l Line"
  puts "[6] -> 6 th Line"
  puts "[q] -> Quit"
end

menu_show

menu_choice = gets.chomp.downcase
  until menu_choice == 'q'
    case menu_choice

    when 'n'
      n = "34th", "28th North Epping", "23rd Tomastown", "Union Square", "8th Monash"
      copy = []
      copy = n[0 .. 3]
      puts copy
      puts "You Stopped at Union Square please wait for 10 mins and continue your yourney, you have one stop left #{n[4]} station! "
      puts "You arrived at your destination -> #{n[4]} <- thank you for traveling with us"
      puts "You stopped at = #{n.length} places"

    when 'l'
      l = "8th Mcity", "6th", "Union Square", "3rd", "1st"
      copy = []
      copy = l[0 .. 2]
      puts copy
      puts "You Stopped at Union Square please wait for 10 mins and continue your yourney you have 2 stops left #{l[3]} station and #{l[4]} station!"
      puts "You arrived at -> #{l[3]} <- station"
      puts "Your final stop -> #{l[4]} <- station thank you."
      puts "you stopped at = #{l.length} places"

      when '6'
        c = "Grand Central", "33th", "28th Watergardens", "23rd", "Albion", "Union Square", "Astor"
        copy = []
        copy = c[0 .. 5]
        puts copy
        puts "You Stopped at Union Square please wait for 10 mins and continue your yourney you have 1 stop left #{c[6]} station!"
        puts "Your final stop -> #{c[6]} <- station thank you."
        puts "you stopped at = #{c.length} places"

    else
      puts "Invalid selection. Please put following menu letters"
    end

menu_show
menu_choice = gets.chomp.downcase
end

puts "Thank you for traveling with us"

##############################################################################################################################
########################################## VERSION 2 #########################################################################
##############################################################################################################################
# def menu_show
#   puts "MTA RAILWAYS".center(80)
#   puts "<>" *40
#   puts "[n] -> n Line"
#   puts "[l] -> l Line"
#   puts "[6] -> 6 th Line"
#   puts "[q] -> Quit"
# end
#
# menu_show
#
# railways = {
#   "lines" => {
#     :lineN => " 34th " << " 28th North Epping " << " 23rd Tomastown " << " Union Square " << " 8th Monash ",
#     :lineL => " 8th Mcity " << " 6th " << " Union Square " << " 3rd " << " 1st ",
#     :lineC => " Grand Central " << " 33th " << " 28th Watergardens " << " 23rd " << " Albion " << " Union Square " << " Astor "
#   }
# }
#
#
# menu_choice = gets.chomp.downcase
#   until menu_choice == 'q'
#     case menu_choice
#
#     when 'n'
#       n = railways["lines"][:lineN]
#       copy = []
#       copy = n[0 .. 3]
#
#       puts copy
#
#       puts "You Stopped at Union Square please wait for 10 mins and continue your yourney, you have one stop left"
#       puts "You arrived at your destination #{n[4]}"
#       puts " stops #{n.length}"
#
#     when 'l'
#       copy = []
#       copy = l[0 .. 2]
#       puts copy
#       puts "You Stopped at Union Square please wait for 10 mins and continue your yourney you have 2 stops left #{l[3]} and #{l[4]}"
#       puts "You arrived at #{l[3]} station"
#       puts "Your final stop #{l[4]} station thank you."
#       puts " Noumber of stops is = #{l.length}"
#
#       when '6'
#         c = "Grand Central", "33th", "28th Watergardens", "23rd", "Albion", "Union Square", "Astor"
#         copy = []
#         copy = c[0 .. 5]
#         puts copy
#         puts "You Stopped at Union Square please wait for 10 mins and continue your yourney you have 1 stop left #{c[6]} "
#         puts "Your final stop #{c[5]} station thank you."
#         puts " Noumber of stops is = #{c.length}"
#     else
#       puts "Invalid selection. Please put following menu letters"
#     end
#
# menu_show
# menu_choice = gets.chomp.downcase
# end
#
# puts "Thank you for traveling with us"
