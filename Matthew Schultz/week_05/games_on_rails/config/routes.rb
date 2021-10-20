Rails.application.routes.draw do
  root :to => 'pages#home'

  get 'magic' => 'magic#index'
  get 'magic/results' => 'magic#results'

  get 'secret' => 'secret#index'
  get 'secret/results' => 'secret#results'

  get 'rock' => 'rock#index'
  get 'rock/results' => 'rock#results'
end
