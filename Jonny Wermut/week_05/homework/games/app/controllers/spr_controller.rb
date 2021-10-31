class SprController < ApplicationController

	def results
		@possibilities = ['scissors', 'paper', 'rock']
		@userChoice = params[:choice]
		@computerChoice = @possibilities[rand(0..2)]
		@result = ''
		if @userChoice == @computerChoice
			@result = "It's a tie"
		elsif @userChoice == 'scissors'
			if @computerChoice == 'rock'
				@result = 'You lose'
			elsif @computerChoice == 'paper'
				@result = 'You win'
			end
		elsif @userChoice == 'paper'
			if @computerChoice == 'rock'
				@result = 'You win'
			elsif @computerChoice == 'scissors'
				@result = "You lose"
			end
		elsif @userChoice == 'rock'
			if @computerChoice = 'scissors'
				@result = 'You win'
			elsif @computerChoice = 'paper'
				@result = 'You lose'
			end
		end 
	end

end

# 'scissors' 
			# 	case @computerChoice
			# 		when 'scissors'
			# 			"It's a tie"
			# 		when 'rock'
			# 			"You lose"
			# 		when 'paper'
			# 			"You win"
			# 		end 
			# 'paper'
			# 	case @computerChoice
			# 		when 'scissors' 
			# 	 		"You lose"
			# 		when 'rock' 
			# 			"You win"
			# 		when 'paper' 
			# 			"It's a tie"
			# 	end 
			# 'rock' 
			# 	case @computerChoice
			# 		when 'scissors' 
			# 			"You win"
			# 		when 'rock'
			# 			"It's a tie"
			# 		when 'paper'
			# 			"You lose" 
			# 	end
			# end