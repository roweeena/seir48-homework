Rails.application.routes.draw do
  root :to => 'home#welcome'

  get '/games' => 'games#index'

  get '/games/magic8' => 'games#magic_form'
  get '/games/magic8/result' => 'games#magic_result'

  get 'games/secret' => 'games#secret_form'
  get 'games/secret/result' => 'games#secret_result'

  get 'games/rock_paper_scissors' => 'games#rock_paper_scissors_form'
  get 'games/rock_paper_scissors/:throw' => 'games#rock_paper_scissors_play'

end
