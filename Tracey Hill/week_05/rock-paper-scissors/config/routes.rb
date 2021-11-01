Rails.application.routes.draw do
  get '/games/rock_paper_scissors/:throw' => 'games#rock_paper_scissors_play' # 'controller#action'
end
