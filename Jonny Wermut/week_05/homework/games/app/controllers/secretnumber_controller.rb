class SecretnumberController < ApplicationController 
	def play
	end

	def results
		@userChoice = params[:number].to_i
		@computerChoice = rand(1..10)
		if @userChoice > 0 and @userChoice <= 10 
			@result = case @userChoice
				when @computerChoice then "You win! Both you and the computer chose #{@userChoice}."
				else "You lose! You chose #{@userChoice} and the computer chose #{@computerChoice}." 
			end
		else
			@result = "You must choose a number between 1 and 10"
	end
end

end