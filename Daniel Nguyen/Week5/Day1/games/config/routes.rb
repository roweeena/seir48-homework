Rails.application.routes.draw do
  root :to => 'pages#home'

  get 'games/magic_eight_ball' => 'magic_eight_ball#question'
  get 'games/magic_eight_ball/answer' => 'magic_eight_ball#answer'

  get 'games/secret_number' => 'secret_number#guess'
  get 'games/secret_number/result' => 'secret_number#result'
end
