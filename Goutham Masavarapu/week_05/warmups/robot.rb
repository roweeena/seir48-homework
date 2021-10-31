# # Robot Factory 🤖
# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.
# The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.
# Names typically take the format of things like "BX777" or "SD234".
# For instance:
# ```rb
# robot1 = Robot.new
# puts robot1.name
# => "BX777"
# robot2 = Robot.new
# puts robot2.name
# => "SD234"
# puts robot2.name
# => "SD234"

require 'pry'
class Robot

  attr_reader :instruction_count

  # Init - Establish the initial properties we want this class to hold.

  def initialize
    @instruction_count = 0
    @name = make_name

    # The Time method gives us a snapshot which we can save in a variable.
    @creation_date = Time.now
    @boot_date = Time.now
  end

  # Make a name - Generate a random name with 2 starting letters and 3 ending letters.

  def make_name
    @instruction_count += 1

    # Generate a range of letters from A-Z, convert it to an array and sample it twice at random.
    letter_pool = ("A".."Z").to_a.sample(2)
    # Now numbers.
    number_pool = (0..9).to_a.sample(3)
    # Merge my 2 arrays and then join then to make a valid string, like "EX456".
    letter_pool.concat( number_pool ).join
  end

  # Say the name.

  def name
    @instruction_count += 1
    @name
  end

  # Reset - Generate a new name and a fresh timer

  def reset
    make_name
    @boot_date = Time.now
  end

  # Instructions - repeat the number of commands ever given to this class.

  # We can use attr_reader to read @instruction_count directly - making this method redundant..

  # def instruction_count
  #   @instruction_count
  # end

  # Timers - Give me the times since creation and last boot.

  def timers
    @instruction_count += 1
    p "Unit has been active for #{ Time.now - @creation_date } seconds. #{ Time.now - @boot_date } since last boot cycle."
  end

end

# Because we are using a class, we require the 'new' keyword.
p1 = Robot.new

p p1.name

# binding.pry
# ```
# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.
# if I say:
# ```rb
# robot3 = Robot.new
# puts robot3.name
# => "RF629"
# robot3.reset
# puts robot3.name
# => "ZC532"
# ```
# ## Extensions 🧯
# ### Counters 🔢
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away.
# For every action our robot takes, we should keep track of it.
# ```rb
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count
# => 5
# ```
# ### Robot Time ⌚️
# Number of instructions is important, but so is the total age of the robot.
# ```rb
# robot3 = Robot.new
# puts robot3.timers
# => "21 seconds since last boot, 21 seconds since creation"
# robot3.reset
# puts robot3.timers
# => "8 seconds since last boot, 29 seconds since creation"
# ``
