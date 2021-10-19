require "pry"

class Robot
  attr_reader :name, :instruction_count, :created_at, :last_updated

  def initialize (name = generate_name)
    @name = name
    @created_at = Time.new
    @last_updated = Time.new
    @instruction_count = 0
  end

  def generate_name
    # letters = ("AA".."ZZ").to_a.sample
    # numbers = ("000".."999").to_a.sample
    # letters + numbers

    randomName = ""
    2.times { randomName << (rand(65..90).chr) }
    3.times { randomName << rand(10).to_s }

    randomName
  end

  def reset
    @instruction_count += 1
    @last_updated = Time.new
    @name = generate_name
  end

  def timers
    @instruction_count += 1
    since_last_boot = (Time.new - @last_updated).to_i
    since_creation = (Time.new - @created_at).to_i
    "#{ since_last_boot } seconds since last boot, #{ since_creation } seconds since creation"
  end
end

binding.pry
