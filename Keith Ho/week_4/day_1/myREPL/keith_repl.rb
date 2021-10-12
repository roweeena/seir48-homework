
ruby -r coderay -r readline -e "
bnd = binding()
  while input = Readline.readline("keith~>>", true)
    begin
      result = bnd.eval input
    rescue StandardError => e
      puts "\e[31m#{e.class}:\e[0m #{e.message}"
    else
      puts CodeRay.encode(result.inspect, :ruby, :terminal)
    end
end"
